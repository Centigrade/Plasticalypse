import json

import django.contrib.auth
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_http_methods, require_POST

from plastic_free.http import JSONResponse, JSONResponseForbidden
from profiles.models import Profile


@require_http_methods(["GET", "POST"])
# @ensure_csrf_cookie
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
# @ensure_csrf_cookie
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
        return JSONResponseForbidden(message="Kann den Benutzer nicht anlegen: {}".format(str(e)))
    return JSONResponse(logged_in=True)


@login_required
def update(request):
    """
    Update the profile with new information
    """
    try:
        # extract data from request
        userdata = json.loads(request.body.decode())
    except Exception as e:
        return JSONResponseForbidden(message="Ungültige Daten angegeben")
    try:
        profile = request.user.profile
    except Profile.DoesNotExist:
        profile = Profile.objects.create(user=request.user)
    if "level" in userdata:
        try:
            profile.level = Profile.levels[userdata["level"]]
        except KeyError:
            return JSONResponseForbidden(message="Level unbekannt")
    if "family_size" in userdata:
        profile.family_size = userdata["family_size"]
    profile.save()
    return JSONResponse(message="Profil aktualisiert.")
