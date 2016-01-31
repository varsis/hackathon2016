from games.models import Game, Round, RoundWords
from rest_framework import serializers
from rest.serializers import UserSerializer

class GameSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'


class RoundSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Round
        fields = '__all__'

class RoundWordsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RoundWords
        fields = '__all__'
