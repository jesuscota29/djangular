# -*- coding: utf-8 -*-
from rest_framework import serializers

from person.models import Person, Car

__author__ = 'Jesús Cota'


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('name', 'last_name', 'birthdate')


class CarSerializer(serializers.ModelSerializer):
    person = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = Car
        fields = ('name', 'brand', 'type', 'year', 'color', 'person')
