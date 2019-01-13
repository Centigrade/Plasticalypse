import datetime
import json

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views.decorators.http import require_GET, require_POST

from groceries.models import *
from plastic_free.http import (JSONResponse, JSONResponseForbidden,
                               JSONResponseRaw)


@require_GET
def get_package_types(request):
    package_list = [
        {"id": pt.name, "weight": pt.amount}
        for pt in PackageType.objects.all()
    ]
    return JSONResponseRaw(package_list)


@require_POST
@login_required
def new_purchase(request):
    # get data from request
    try:
        userdata = json.loads(request.body.decode())
        # create new purchase
        userdate = userdata["date"][0:10]
        purchase = Purchase(
            user=request.user, date=userdate)
        purchase.save()
    except Exception as e:
        print("    Couldn't create Purchase: {}, {}; Data was:".format(type(e), e))
        print("    {}".format(repr(request.body.decode())))
        raise
        return JSONResponseForbidden(message="Kann Daten nicht lesen")
    new_set = userdata.keys() - {"date"}
    db_set = {pt.name for pt in PackageType.objects.all()}
    for pt in (new_set & db_set):
        # skip zero values
        if userdata[pt] == 0:
            continue
        purchase_item = PurchasePackageAmount(
            package_type=PackageType.objects.get(name=pt),
            purchase=purchase,
            amount=userdata[pt]
        )
        purchase_item.save()
    return JSONResponse()


@require_GET
@login_required
def get_range(request):
    """
    Return all of the user's purchases
    TODO: At some point we want to return purchases within a date range
    """
    user = request.user
    l = []
    for purchase in user.purchases.all():
        d = {
            "date": purchase.date.strftime("%Y-%m-%d"),
            "amount": purchase.aggregate(),
        }
        l.append(d)
    return JSONResponseRaw(l)
