from ctypes import addressof
from django.shortcuts import render
<<<<<<< HEAD
from .models import OrderForm

=======
from .models import *
>>>>>>> 196b9d31828c44409e78fecd612056085051d8f5
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
    number_of_people = request.POST.get('number_of_people')
    Date = request.POST.get('Date')
    occasionn = request.POST.get('occasionn') 
    MoreDetails = request.POST.get('MoreDetails') 
    Address = request.POST.get('Address')
    collectData=custom(Address=Address,MoreDetails=MoreDetails,occasionn=occasionn,Date=Date,number_of_people=number_of_people)
    return render(request,'forms/custom.html')

def orderNow(request):
    address= request.POST.get('address')
    Date= request.POST.get('Date')
    Number_of_people= request.POST.get('number_of_people')
    comments= request.POST.get('comments')
    Email =request.POST.get('Email') 
    Data = OrderForm(address=address,Date=Date,Number_of_people=Number_of_people, comments=comments,Email=Email)

    return render(request,'forms/orderNow.html')



