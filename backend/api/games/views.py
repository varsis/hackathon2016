from django.shortcuts import render
from rest_framework import viewsets
from django.db.models import Q
from games.models import Game,Round,RoundWords
from games.serializers import GameSerializer, RoundSerializer, RoundWordsSerializer

class GameViewSet(viewsets.ModelViewSet):
    serializer_class = GameSerializer

    def get_queryset(self):
        user = self.request.user
        return Game.objects.filter(Q(player1=user) | Q(player2=user))



class RoundViewSet(viewsets.ModelViewSet):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer

class RoundWordsViewSet(viewsets.ModelViewSet):
    queryset = RoundWords.objects.all()
    serializer_class = RoundWordsSerializer
