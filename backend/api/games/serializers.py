from games.models import Game, Round, RoundWords
from rest_framework import serializers
from rest.serializers import UserSerializer
from words.serializers import WordSerializer




class RoundWordsSerializer(serializers.HyperlinkedModelSerializer):
    word = WordSerializer()
    class Meta:
        model = RoundWords
        fields = ['id','word']

class RoundSerializer(serializers.HyperlinkedModelSerializer):
    words = RoundWordsSerializer(many=True)
    class Meta:
        model = Round
        fields = ('url','player','score','word','words')

class GameSerializer(serializers.HyperlinkedModelSerializer):
    rounds = RoundSerializer(many=True)
    class Meta:
        model = Game
        fields = ('player1','player2','rounds','player1Score','player2Score','numberOfRounds')
