from django.contrib.auth import get_user_model
from django.db import models

from companies.models import Company

User = get_user_model()


class CompanyAccount(models.Model):
    credit = models.IntegerField(blank=True, default=0)
    debit = models.IntegerField(blank=True, default=0)
    created = models.DateTimeField(auto_now=True)
    company = models.ForeignKey(to=Company, related_name='fk_company_companyaccount', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.company} has a credit of {self.credit} and a debit of {self.debit}'
