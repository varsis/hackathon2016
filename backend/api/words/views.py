from words.models import Word, Association
from rest_framework import viewsets
from words.serializers import WordSerializer, AssociationSerializer


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer


class AssociationViewSet(viewsets.ModelViewSet):
    queryset = Association.objects.all()
    serializer_class = AssociationSerializer
