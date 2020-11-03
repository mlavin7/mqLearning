from django.urls import path

from users.views import ListUsersView, GetPatchDeleteUsersView

urlpatterns = [
    path('', ListUsersView.as_view()),
    path('me/', GetPatchDeleteUsersView.as_view()),
]
