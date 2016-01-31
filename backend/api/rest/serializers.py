from django.contrib.auth.models import User, Group
from rest.models import GameUser
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

class GameUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = GameUser
        fields = '__all__'


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
