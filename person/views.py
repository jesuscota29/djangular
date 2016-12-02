from django.http.response import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from rest_framework.response import Response
from rest_framework.views import APIView

from person.models import Person, Car
from person.serializers import PersonSerializer, CarSerializer


def index(request):
    context = dict()
    return render(request, 'index.html', context)


def person_list(request):
    return HttpResponseRedirect(reverse('/#personas'))


class PersonList(APIView):
    """
    Lsit all persons
    """

    def get(self, request):
        persons = Person.objects.all()
        serializer = PersonSerializer(persons, many=True)
        return Response(serializer.data)


class CarList(APIView):
    """
    List all cars.
    """

    def get(self, request):
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
