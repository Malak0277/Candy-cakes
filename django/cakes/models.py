from django.db import models


class Cake(models.Model):
    name = models.CharField(max_length=50)
    img = models.ImageField(upload_to='cakes/static/Database/')
    category = models.CharField(max_length=50)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
