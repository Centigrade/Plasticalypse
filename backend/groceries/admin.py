from django.contrib import admin

from groceries.models import *


@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = ("user", "date")


@admin.register(PurchasePackageAmount)
class PurchasePackageAmountAdmin(admin.ModelAdmin):
    list_display = ("purchase", "package_type", "amount")


@admin.register(PackageType)
class PackageType(admin.ModelAdmin):
    list_display = ("name", "amount")
