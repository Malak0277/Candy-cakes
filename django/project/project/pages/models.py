from django.db import models

#name
#image
#category
#Content

class Cake(models.Model) :
    name =models.CharField(max_length=100)
    image= models.ImageField(upload_to='static\Database')
    category=models.CharField(max_length=200)
    active = models.BooleanField(default=True)
    

    def __str__(self) :
        return self.name
