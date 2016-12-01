# -*- coding: utf-8 -*-
from django.conf.urls import url

from person.views import PersonList, CarList

__author__ = 'Jesús Cota'

urlpatterns = [
    url(r'^persons/$', PersonList.as_view()),
    url(r'^cars/$', CarList.as_view()),
]