from rest_framework.generics import ListAPIView

from workshops.models import Workshop
from workshops.serializers import WorkshopSerializer


class ListWorkshopView(ListAPIView):
    queryset = Workshop.objects.all()
    serializer_class = WorkshopSerializer
