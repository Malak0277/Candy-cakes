from django.db import models

#name
#image
#category
#Content

class Cakes(models.Model) :
    name =models.CharField(max_length=100)
    image= models.ImageField(upload_to='photos/%y/%m/%d')
    category=models.CharField(max_length=200)
    content=models.TextField()
    active = models.BooleanField(default=True)
    
