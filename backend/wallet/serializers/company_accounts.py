from rest_framework import serializers

from wallet.models.company_accounts import CompanyAccount


class CompanyAccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = CompanyAccount
        fields = '__all__'
