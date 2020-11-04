from rest_framework import serializers

from wallet.models.accounts import Account

from users.serializers import UserSerializer


class AccountSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Account
        fields = '__all__'
