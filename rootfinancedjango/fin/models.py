from django.db import models

# Create your models here.

class Weeklyexpenses(models.Model):
    datee = models.CharField(db_column='Datee', max_length=15)  # Field name made lowercase.
    ccord = models.CharField(db_column='CCorD', max_length=10)  # Field name made lowercase.
    amountspent = models.CharField(db_column='AmountSpent', max_length=15)  # Field name made lowercase.
    category = models.CharField(db_column='Category', max_length=13)  # Field name made lowercase.

    class Meta:
        managed = True 
        db_table = 'weeklyexpenses'