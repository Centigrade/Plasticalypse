import datetime
import json

import django.contrib.auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import (require_GET, require_http_methods,
                                          require_POST)

from plastic_free.http import (JSONResponse, JSONResponseForbidden,
                               JSONResponseRaw)
from profiles.models import Profile


@require_GET
@login_required
def get_profile(request):
    # return user profile
    user = request.user
    d = {}
    d["email"] = user.email
    d["level"] = "Unbekannt ({}g)".format(user.profile.level)
    for (k, v) in Profile.levels.items():
        if v == user.profile.level:
            d["level"] = k
            break
    # compute how long the user has been active
    user_purchases = user.purchases.order_by("date")
    if user_purchases.exists():
        registered_secs = (datetime.date.today() -
                           user_purchases[0].date).total_seconds()
    else:
        registered_secs = 1
    allowed = round(registered_secs / 3600 / 24 / 30) * user.profile.level
    consumed = 0
    for purchase in user_purchases:
        consumed += purchase.aggregate()
    d["savings"] = allowed - consumed
    d["family_size"] = user.profile.family_size
    return JSONResponseRaw(d)


@require_http_methods(["GET", "POST"])
def login(request):
    # redirect users to homepage
    if request.method == "GET":
        if request.is_ajax():
            # tell user if they are already logged in using cookies
            if request.user.is_authenticated():
                return JSONResponse(logged_in=True)
            else:
                return JSONResponse(logged_in=False)
        else:
            # redirect user to homepage
            return JSONResponse(logged_in=False)
    # authenticate user
    try:
        # extract data from request
        userdata = json.loads(request.body.decode())
        user = django.contrib.auth.authenticate(
            username=userdata["email"], password=userdata["password"]
        )
    except:
        user = None
    # login failed
    if user is None:
        return JSONResponseForbidden(
            message="Benutzername und/oder Passwort falsch!",
            logged_in=False,
        )
    # login succeeded
    django.contrib.auth.login(request, user)
    return JSONResponse(logged_in=True)


@require_POST
def register(request):
    """
    Register a new user
    """
    try:
        # extract data from request
        userdata = json.loads(request.body.decode())
        user = User.objects.create_user(
            userdata["email"], userdata["email"], userdata["password"]
        )
    except Exception as e:
        print("    Can't create user: {} {}".format(repr(e), str(e)))
        return JSONResponseForbidden(message="Kann den Benutzer nicht anlegen: {}".format(str(e)))
    user.save()
    profile = Profile(user=user)
    profile.save()
    django.contrib.auth.login(request, user)
    return JSONResponse(logged_in=True)


@login_required
@require_POST
def update(request):
    """
    Update the profile with new information
    """
    try:
        # extract data from request
        userdata = json.loads(request.body.decode())
    except Exception as e:
        return JSONResponseForbidden(message="Ungültige Daten angegeben")
    profile = request.user.profile
    if "level" in userdata:
        try:
            profile.level = Profile.levels[userdata["level"]]
        except KeyError:
            return JSONResponseForbidden(message="Level unbekannt")
    if "family_size" in userdata:
        profile.family_size = userdata["family_size"]
    profile.save()
    return JSONResponse(message="Profil aktualisiert.")
