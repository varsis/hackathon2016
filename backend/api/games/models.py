from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User
from words.models import Word

# Create your models here.

class Game(models.Model):
    # A Game..
    player1 = models.ForeignKey(User,related_name='player1')
    player2 = models.ForeignKey(User,related_name='player2')

    player1Score = models.IntegerField(default=0)
    player2Score = models.IntegerField(default=0)

    numberOfRounds = models.IntegerField(default=5)

class Round(models.Model):
    game = models.ForeignKey(Game,related_name='rounds')
    word = models.ForeignKey(Word)
    player = models.ForeignKey(User)
    score = models.IntegerField(default=0)

class RoundWords(models.Model):
    round = models.ForeignKey(Round,related_name='words')
    word = models.ForeignKey(Word)




