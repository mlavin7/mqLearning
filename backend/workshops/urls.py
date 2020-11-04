from django.urls import path

from workshops.views import ListWorkshopView

urlpatterns = [
    path('', ListWorkshopView.as_view()),
]
