"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers
from rest import views
from words import views as wordsView
from games import views as gamesView

from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token

router = routers.DefaultRouter()

router.register(r'users', views.UserViewSet)
router.register(r'user-profile', views.UserProfileViewSet)
#router.register(r'groups', views.GroupViewSet)

router.register(r'words', wordsView.WordViewSet)
router.register(r'associations',wordsView.AssociationViewSet)

router.register(r'game',gamesView.GameViewSet,base_name="game")
router.register(r'round',gamesView.RoundViewSet,base_name='round')
router.register(r'roundwords',gamesView.RoundWordsViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^register',views.create_auth),
    url(r'^api-token-verify/', verify_jwt_token),
    url(r'^api-auth-token', obtain_jwt_token),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
