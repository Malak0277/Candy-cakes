from django.db import models

# Create your models here.

class Login(models.Model):
 email = models.CharField(max_length=50)
 password = models.CharField(max_length=50)


class Signup(models.Model):
    #firstname = models.CharField(max_length=50)
    #lastname = models.CharField(max_length=50)
    username = models.CharField(max_length=50, unique=True, default='')
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    #password2 = models.CharField(max_length=50, null=True, blank=True)
