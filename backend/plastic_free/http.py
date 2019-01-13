"""
    Various HTTP utilities for plastic_free
"""

import json

from django.http import (HttpResponse, HttpResponseForbidden,
                         HttpResponseNotFound)


def _to_json(**kwargs):
    return json.dumps(kwargs)


class JSONResponse(HttpResponse):
    """
    A subclass of HttpResponse for responses containing JSON data
    """

    def __init__(self, status="OK", **kwargs):
        super(JSONResponse, self).__init__(
            _to_json(status=status, **kwargs))
        self["Content-Type"] = "application/json"


class JSONResponseForbidden(HttpResponseForbidden):
    """
    A subclass of HttpResponseForbidden for responses containing JSON data
    """

    def __init__(self, message="Zugriff verweigert", **kwargs):
        super(JSONResponseForbidden, self).__init__(_to_json(
            message=message,
            status="ERROR",
            **kwargs
        ))
        self["Content-Type"] = "application/json"


class JSONResponseNotFound(HttpResponseNotFound):
    """
    A subclass of HttpResponseNotFound for responses containing JSON data
    """

    def __init__(self, message="Nicht gefunden", **kwargs):
        super(JSONResponseNotFound, self).__init__(_to_json(
            message=message,
            status="ERROR",
            **kwargs
        ))
        self["Content-Type"] = "application/json"


class JSONResponseRaw(HttpResponse):
    """
    A JSONResponse which can be instantiated with any data and does not
    necessarily contain a dictionary with a message and a status key.
    """

    def __init__(self, data):
        super(JSONResponseRaw, self).__init__(json.dumps(data))
