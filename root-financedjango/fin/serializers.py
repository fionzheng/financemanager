from rest_framework import serializers
from .models import *

class WeeklyexpensesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Weeklyexpenses
        fields = "__all__"