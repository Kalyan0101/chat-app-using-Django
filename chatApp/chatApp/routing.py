from django.urls import path
from .consumers import ChatConsumer

# Here, "" is routing to the URL ChatConsumer which 
# will handle the chat functionality.
websocket_urlpatterns = [
    path("<username>" , ChatConsumer.as_asgi()) , 
] 