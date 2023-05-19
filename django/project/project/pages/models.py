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
    
<<<<<<< HEAD
#Oeder form 

class OrderForm(models.Model):
    Email = models.EmailField(max_length=150)
    Address = models.CharField(max_length=300)
    Comment = models.TextField()

class Form(forms.Form):
    number_of_people = forms.ChoiceField(choices=[(i, i) for i in range(1, 11)])
    Date = forms.DateField(widget=forms.DateInput(format='%d-%m-%Y'), input_formats=['%d-%m-%Y'])


#costmized form
class CustomizedForm(models.Model):

    Address = models.CharField(max_length=300)
    MoreDetails = models.TextField()
    OCCASION_CHOICES = [
        ('Wedding','Engagement',),
        ('Birthday','Eid Treats',),
      
      
    ]
    occasion = models.CharField(max_length=20, choices=OCCASION_CHOICES)

#dropdown menu with the choices
class CustomizedFormForm(forms.ModelForm):
    class Meta:
        model = CustomizedForm
        fields = ['occasion']

class Form(forms.Form):
    number_of_people = forms.ChoiceField(choices=[(i, i) for i in range(1, 11)])
    Date = forms.DateField(widget=forms.DateInput(format='%d-%m-%Y'), input_formats=['%d-%m-%Y'])
=======

    def __str__(self) :
        return self.name
>>>>>>> 196b9d31828c44409e78fecd612056085051d8f5
