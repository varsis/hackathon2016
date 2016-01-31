from words.models import Word, Association
from rest_framework import serializers


class WordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Word
        fields = ['word']


class AssociationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Association
        fields = ('word1', 'word2','score')
