# -*- coding: utf-8 -*-
# Generated by Django 1.11.18 on 2019-01-13 12:02
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groceries', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='purchase',
            name='date',
            field=models.DateField(default=datetime.date.today),
        ),
    ]