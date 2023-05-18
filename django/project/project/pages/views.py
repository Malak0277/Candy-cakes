from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'pages/home.html')

def bday(request):
    return render(request,'pages/birthday.html')

def wedding(request):
    return render(request,'pages/wedding.html')

def eid(request):
    return render(request,'pages/eid.html')

def minis(request):
    return render(request,'pages/minis.html')

def others(request):
    return render(request,'pages/others.html')

def custom(request):
    return render(request,'forms/custom.html')

def orderNow(request):
    return render(request,'forms/orderNow.html')

