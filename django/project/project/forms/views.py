from django.shortcuts import render

# Create your views here.

def custom(request):
    return render(request,'forms/custom.html')

def orderNow(request):
    return render(request,'forms/orderNow.html')

