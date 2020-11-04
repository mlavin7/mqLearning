from django.contrib.auth import get_user_model
from django.db.models import Sum, F
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    available_credit = serializers.SerializerMethodField()

    def get_available_credit(self, instance):
        return instance.fk_user_account.all().aggregate(total_available=Sum(F('credit')-F('debit')))

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'avatar', 'date_joined', 'isAdmin', 'company',
                  'address', 'zip_code', 'city', 'country', 'available_credit']
