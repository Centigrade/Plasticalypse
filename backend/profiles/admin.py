from django.contrib import admin

from profiles.models import *


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "level", "family_size")
