from django.shortcuts import render
from .models import CustomizedForm, OrderForm

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
    Date = request.POST.get('Date')
    number_of_people = request.POST.get('number_of_people')
    occasionn = request.POST.get('occasionn') 
    MoreDetails = request.POST.get('MoreDetails') 
    Address = request.POST.get('Address')
    if Address:
        collectData=CustomizedForm(Address=Address,MoreDetails=MoreDetails,occasionn=occasionn,Date=Date,number_of_people=number_of_people)
        collectData.save()
    else:
        pass
    return render(request,'forms/custom.html')

def orderNow(request):
    address= request.POST.get('address')
    Date= request.POST.get('Date')
    Number_of_people= request.POST.get('number_of_people')
    comments= request.POST.get('comments')
    Email =request.POST.get('Email') 
    Data = OrderForm(Email=Email, address=address, comments=comments, Number_of_people=Number_of_people, Date=Date)
    Data.save()
    return render(request,'forms/orderNow.html')

