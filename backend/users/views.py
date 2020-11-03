from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView

from users.serializers import UserSerializer

User = get_user_model()


class ListUsersView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
