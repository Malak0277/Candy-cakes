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
    Address= request.POST.get('address')
    date= request.POST.get('Date')
    number_of_people= request.POST.get('number_of_people')
    Comment= request.POST.get('comments')
    #Email =request.POST.get('Email')
    if Address:
        Data = OrderForm(Address=Address, Comment=Comment, number_of_people=number_of_people, date=date)
        Data.save()
    else:
        pass 
    return render(request,'forms/orderNow.html')
