from django.contrib.auth.models import AbstractUser
from django.db import models

from companies.models import Company


def user_directory_path(instance, filename):
    return f'{instance.username}/{filename}'


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to=user_directory_path, blank=True, null=True)
    isAdmin = models.BooleanField(default=False)
    company = models.ForeignKey(to=Company, related_name='fk_user_company', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'ID {self.pk}: {self.email}'
