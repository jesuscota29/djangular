from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible


@python_2_unicode_compatible
class Person(models.Model):
    name = models.CharField(verbose_name='Name', max_length=72)
    last_name = models.CharField(verbose_name='Last Name', max_length=72)
    birthdate = models.DateField(verbose_name='Birthdate', default=timezone.now)

    def __str__(self):
        return ' '.join([self.name, self.last_name])

    def get_full_name(self):
        return ' '.join([self.name, self.last_name])


@python_2_unicode_compatible
class Car(models.Model):
    name = models.CharField(verbose_name='Name', max_length=45)
    brand = models.CharField(verbose_name='Brand', max_length=45, blank=True,
                             null=True)
    type = models.CharField(verbose_name='Type', max_length=45, blank=True,
                            null=True)
    year = models.CharField(verbose_name='Year', max_length=4)
    color = models.CharField(verbose_name='Color', max_length=32, blank=True,
                             null=True)

    def __str__(self):
        return ' - '.join([self.name, self.year])
