from django.urls import path

from users.views import ListUsersView

urlpatterns = [
    path('', ListUsersView.as_view())
]
