from django.shortcuts import render
from rest_framework import viewsets
from games.models import Game,Round,RoundWords
from games.serializers import GameSerializer, RoundSerializer, RoundWordsSerializer

class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer


class RoundViewSet(viewsets.ModelViewSet):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer

class RoundWordsViewSet(viewsets.ModelViewSet):
    queryset = RoundWords.objects.all()
    serializer_class = RoundWordsSerializer
