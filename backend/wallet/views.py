from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from wallet.models.accounts import Account
from wallet.models.company_accounts import CompanyAccount
from wallet.serializers.company_accounts import CompanyAccountSerializer

User = get_user_model()


class CreditUserAccountView(GenericAPIView):
    queryset = CompanyAccount.objects.all()
    serializer_class = CompanyAccountSerializer
    lookup_field = 'user_id'
    permission_classes = []

    def post(self, request, *args, **kwargs):
        owner = User.objects.get(id=self.kwargs.get('user_id'))
        company = self.request.user.company
        credit = Account(owner=owner, company=company, credit=request.data['credit'])
        credit.save()
        debit = CompanyAccount(company=company, debit=request.data['credit'])
        debit.save()

        return Response(status=200)
