from django.contrib import admin

from wallet.models.accounts import Account

from wallet.models.company_accounts import CompanyAccount

admin.site.register(Account)
admin.site.register(CompanyAccount)
