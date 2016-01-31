from django.contrib.auth.models import User, Group
from rest.models import GameUser
from rest_framework import viewsets
from rest.serializers import UserSerializer, GroupSerializer, GameUserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class GameUserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = GameUser.objects.all()
    serializer_class = GameUserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
