from django.db import models

# Create your models here.

"""class Login(models.Model):
 email = models.CharField(max_length=50)
 password = models.CharField(max_length=50)"""


class Signup(models.Model):
    firstname = models.CharField(max_length=50, null=True, blank=True)
    lastname = models.CharField(max_length=50, null=True, blank=True)
    email = models.CharField(max_length=50, null=True, blank=True)
    password = models.CharField(max_length=50, null=True, blank=True)
    #password2 = models.CharField(max_length=50, null=True, blank=True)
