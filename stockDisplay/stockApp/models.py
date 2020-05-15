from django.db import models


# Create your models here.
class Stock(models.Model):
    sid = models.AutoField(max_length=20, primary_key=True)
    sname = models.CharField(max_length=100)
    quant = models.IntegerField()

    class Meta:
        managed = True
        db_table = 'stock'
