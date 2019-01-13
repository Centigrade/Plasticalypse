from django.conf.urls import url

from groceries.views import *

urlpatterns = [
    url(r'^$', get_package_types),
    url(r'^add$', new_purchase),
    url(r'^range$', get_range),
]
