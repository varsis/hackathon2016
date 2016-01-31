from django.contrib.auth.models import User, Group
from rest.models import UserProfile
from rest_framework import viewsets
from rest.serializers import UserSerializer,  UserProfileSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

'''
{"email":"email@email.com","password":"password123456","username":"chris"}
'''

@api_view(['POST'])
@permission_classes(())
def create_auth(request):
    print request.data.keys
    user = User.objects.create_user(
            request.data['username'],
            request.data['email'],
            request.data['password']
        )
    if user:
        UserProfile.objects.create(user=user)
        return Response(request.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)


'''
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
'''
