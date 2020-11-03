from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Workshop(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    location = models.CharField(max_length=50)
    date = models.DateTimeField()
    duration = models.CharField(max_length=10)
    cost = models.IntegerField()
    attendees = models.ManyToManyField(to=User, related_name='m2m_workshops')

    def __str__(self):
        return f'{self.title}'
