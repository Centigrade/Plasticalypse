from django.contrib.auth.models import User
from django.db import models


class PackageType(models.Model):
    name = models.CharField(
        max_length=255, help_text="Name der Verpackung", unique=True)
    amount = models.PositiveSmallIntegerField(
        help_text="Menge an Plastik in der Verpackung (Gramm)")


class Purchase(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name="purchases")
    packages = models.ManyToManyField(
        PackageType, through="PurchasePackageAmount")
    date = models.DateField(auto_now_add=True, blank=False)


class PurchasePackageAmount(models.Model):
    class Meta:
        unique_together = ("package_type", "purchase")
    package_type = models.ForeignKey(PackageType, on_delete=models.CASCADE)
    purchase = models.ForeignKey(Purchase, on_delete=models.CASCADE)
    amount = models.PositiveSmallIntegerField(
        help_text="Menge an Verpackungen von diesem Typ")
