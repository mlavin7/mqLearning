from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=30, unique=True)

    def __str__(self):
        return f'ID {self.pk}: {self.name}'
