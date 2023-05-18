from django.shortcuts import render
from .models import *


def index(request):
    return render(request, 'cakes/home.html')


def bday(request):
    return render(request, 'cakes/birthday.html')


def wedding(request):
    return render(request, 'cakes/wedding.html')


def eid(request):
    return render(request, 'cakes/eid.html')


def minis(request):
    return render(request, 'cakes/minis.html')


def others(request):
    return render(request, 'cakes/others.html')


def form(request):
    return render(request, 'cakes/formTemp.html')
