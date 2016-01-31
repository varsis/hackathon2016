# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-31 09:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('words', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='association',
            name='id',
            field=models.AutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='association',
            name='word1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='word1', to='words.Word'),
        ),
    ]