from django.contrib.auth import authenticate
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from .models import Signup

from django.contrib.auth.models import User

# Create your views here.



def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['pass']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            for row in Signup.objects.all():
                if row.email == email:
                    if row.password == password:
                        return redirect('../../')
            else:
                return render(request, 'login.html', {'error_message': 'Invalid login'})
        else:
            return render(request, 'login.html', {'error_message': 'Invalid login'})
    else:
        return render(request, 'users/login.html')

"""def login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('pass')
        if email and password:
            data = Login(email=email, password=password)
            data.save()
            return redirect('../../')
        else:
            return HttpResponseRedirect(request.path)
    else:
        pass
    return render(request, 'users/login.html')
"""

def signup(request):
    if request.method == 'POST':
        firstname = request.POST.get('firstname')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        #if firstname and lastname and email and password and password2:
        signup = Signup(firstname=firstname, lastname=lastname, email=email, password=password)#, password2=password2)
        signup.save()
        return redirect('../../')
    return render(request, 'users/signup.html')
