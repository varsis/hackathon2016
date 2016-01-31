from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Word(models.Model):
    word = models.CharField(max_length=64)


class Association(models.Model):
    word1 = models.ForeignKey(Word,related_name='word1')
    word2 = models.ForeignKey(Word,related_name='word2')
    score = models.IntegerField(default=5)


