from django.conf.urls import url

from profiles.views import *

urlpatterns = [
    url(r'^login$', login),
    url(r'^register$', register),
    url(r'^update$', update),
]
