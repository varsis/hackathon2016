from django.contrib.auth.models import User, Group
from rest.models import UserProfile
from rest_framework import serializers

class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['score']

class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'username', 'email')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = UserProfileSerializer()
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff','profile')

'''
class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
'''
