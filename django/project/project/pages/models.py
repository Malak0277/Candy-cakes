from django.db import models
from django import forms

#name
#image
#category
#Content


class Cake(models.Model) :
    name =models.CharField(max_length=100)
    image= models.ImageField(upload_to='static\Database')
    category=models.CharField(max_length=200)
    active = models.BooleanField(default=True)
    def _str_(self) :
        return self.name
    


#================================================
SIZE_CHOICES = [
    ('n', 'Number of People'),
    ('1', '1'),
    ('2', '2'),
    ('3', '3'),
    ('4', '4'),
    ('5', '5'),
    ('6', '6'),
    ('7', '7'),
    ('8', '8'),
    ('9', 'More than 8'),
]

OCCASION_CHOICES = [
    ('wedding', 'Wedding'),
    ('engagement', 'Engagement'),
    ('birthday', 'Birthday'),
    ('eid', 'Eid Treats'),
    ('other', 'Other'),
    ('minis', 'Minis'),
    ]



#Order form 

class OrderForm(models.Model):
    Email = models.EmailField(max_length=150)
    Address = models.CharField(max_length=300)
    Comment = models.TextField()
    number_of_people = models.CharField(max_length=1, choices=SIZE_CHOICES)
    date = models.DateField()
    Email = models.EmailField(max_length=150)

#costmized form
class CustomizedForm(models.Model):
    Address = models.CharField(max_length=300)
    MoreDetails = models.TextField()
    occasionn = models.CharField(max_length=20, choices=OCCASION_CHOICES)
    Date = models.DateField()
    number_of_people = models.CharField(max_length=1, choices=SIZE_CHOICES)



