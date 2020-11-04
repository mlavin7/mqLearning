from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=100, unique=True)
    phone = models.CharField(max_length=15, blank=True)
    website = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=100, blank=True)
    zip_code = models.CharField(max_length=8, blank=True)
    city = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return f'ID {self.pk}: {self.name}'
