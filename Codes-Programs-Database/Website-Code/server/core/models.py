from django.db import models

# Create your models here.

class Dimaond(models.Model):
    X   = models.FloatField()
    Y   = models.FloatField()
    Z   = models.FloatField()
    carat   = models.FloatField()
    depth   = models.FloatField()
    table   = models.FloatField()
    price1   = models.FloatField(default=0.0)
    price2  = models.FloatField(default=0.0)
    price3  = models.FloatField(default=0.0)
    cut     = models.FloatField()
    color   = models.FloatField()
    clarity = models.FloatField()
    
