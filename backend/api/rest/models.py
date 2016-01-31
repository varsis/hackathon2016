from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class GameUser(models.Model):
    user = models.ForeignKey(User)
    score = models.IntegerField(default=0)
