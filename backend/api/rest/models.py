from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    # Access using : u = User.objects.get()
    # u.userProfile.score
    user = models.OneToOneField(User,related_name='profile')
    score = models.IntegerField(default=0)
