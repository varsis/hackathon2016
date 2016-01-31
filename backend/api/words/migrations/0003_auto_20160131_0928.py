# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-31 09:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0002_auto_20160131_0927'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='association',
            name='id',
        ),
        migrations.AlterField(
            model_name='association',
            name='word1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='word1', serialize=False, to='words.Word'),
        ),
    ]