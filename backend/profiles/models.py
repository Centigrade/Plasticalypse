from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    BEGINNER = 3750
    MODERATE = 3083
    HARDLINER = 2333
    levels = {
        "beginner": BEGINNER,
        "moderate": MODERATE,
        "hardliner": HARDLINER
    }
    level_choices = ((v, k) for (k, v) in levels.items())
    user = models.OneToOneField(
        User, help_text="Profil des Nutzers", on_delete=models.CASCADE, null=False)
    level = models.SmallIntegerField(
        help_text="Einstufung des Nutzers", choices=level_choices, blank=False, default=MODERATE)
    family_size = models.SmallIntegerField(
        help_text="Anzahl Personen im Haushalt", blank=False, default=1)
