from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets


# Create your views here.

from .serializers import *

class WeeklyexpensesAPI(viewsets.ModelViewSet):
    serializer_class = WeeklyexpensesSerializer
    queryset = Weeklyexpenses.objects.all()[:30]
