# views.py
from django.forms import model_to_dict
from django.shortcuts import render
from django.contrib.auth.models import User
from . import models
import json


def users(request):
    all_users = User.objects.all()

    return render(request, 'users.html', {'all_users': all_users})


def user_chat(request, user_id):
    username = User.objects.get(id=user_id, is_active=True)
    all_users = User.objects.all()
    return render(request, 'chat.html', {'all_users': all_users, 'user_id': user_id, 'username': username})

