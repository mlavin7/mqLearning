from django.db.models import Sum, F
from rest_framework import serializers

from companies.models import Company

from users.serializers import UserSerializer


class CompanySerializer(serializers.ModelSerializer):
    fk_user_company = UserSerializer
    available_credit = serializers.SerializerMethodField()

    def get_available_credit(self, instance):
        return instance.fk_company_companyaccount.all().aggregate(total_available=Sum(F('credit') - F('debit')))

    class Meta:
        model = Company
        fields = ['name', 'phone', 'website', 'address', 'zip_code', 'city', 'country', 'fk_user_company',
                  'available_credit']
