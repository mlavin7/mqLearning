from rest_framework import serializers

from workshops.models import Workshop


class WorkshopSerializer(serializers.ModelSerializer):
    number_of_attendees = serializers.SerializerMethodField()

    def get_number_of_attendees(self, workshop):
        return workshop.attendees.count()

    class Meta:
        model = Workshop
        fields = ['title', 'description', 'location', 'created', 'date_start', 'date_end', 'cost', 'attendees',
                  'number_of_attendees']
