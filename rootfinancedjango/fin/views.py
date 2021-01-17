from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import *

class WeeklyexpensesAPI(viewsets.ModelViewSet):
    serializer_class = WeeklyexpensesSerializer
    queryset = Weeklyexpenses.objects.all()[:50]