from django.urls import path

from companies.views import ListCompanyView, CreateCompanyView

urlpatterns = [
    path('', ListCompanyView.as_view()),
    path('new/', CreateCompanyView.as_view()),
]
