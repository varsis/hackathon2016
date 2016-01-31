from games.models import Game, Round, RoundWords
from rest_framework import serializers
from rest.serializers import UserSerializer
from words.serializers import WordSerializer




class RoundWordsSerializer(serializers.HyperlinkedModelSerializer):
    word = WordSerializer()
    class Meta:
        model = RoundWords
        fields = ['id','word','round']

    def create(self, validated_data):
        return RoundWords.objects.create(
        round=validated_data['round'],
        word=validated_data['word'],)

class RoundSerializer(serializers.HyperlinkedModelSerializer):
    words = RoundWordsSerializer(many=True)
    class Meta:
        model = Round
        fields = ('url','game','player','score','word','words')

    def create(self, validated_data):
        return Round.objects.create(
        game=validated_data['game'],
        player=validated_data['player'],
        score=validated_data['score'],
        word=validated_data['word'],
    )

class GameSerializer(serializers.HyperlinkedModelSerializer):
    rounds = RoundSerializer(many=True)
    class Meta:
        model = Game
        fields = ('player1','player2','rounds','player1Score','player2Score','numberOfRounds')

    def create(self, validated_data):
        return Game.objects.create(
        player1=validated_data['player1'],
        player2=validated_data['player2'],
        #rounds=validated_data['rounds'],
        player1Score=validated_data['player1Score'],
        player2Score=validated_data['player2Score'],
        numberOfRounds=validated_data['numberOfRounds']
    )
