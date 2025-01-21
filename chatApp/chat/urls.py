from django.urls import path
from . import views

urlpatterns = [
    path('', views.users, name='users'),
    path('user/<int:user_id>', views.user_chat, name='user_chat'),
]