from django.db import models

#name
#image
#category
#Content

class Cakes(models.Model) :
    name =models.CharField(max_length=100)
    image= models.ImageField
    category=models.CharField(max_length=200)
    content=models.CharField(max_length=200)
