from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.


"""
def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['pass']
        data = Login(email=email, password=password)
        if data is not None:
            for row in Signup.objects.all():
                if row.email == email:
                    if row.password == password:
                        data.save()
                        return redirect('../../')
                else:
                    return render(request, 'users/login.html', {'error_message': 'Invalid login'})
        else:
            return render(request, 'users/login.html', {'error_message': 'Invalid login'})
    else:
        return render(request, 'users/login.html')

"""
def login(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('pass')
        if email and password:
            data = User.objects.create_user(email, email, password)
            data.save()
            return redirect('../../')
        else:
            return HttpResponseRedirect(request.path)
    else:
        pass
    return render(request, 'users/login.html')



def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')

        if username or email or password or password2:
            pass
        else:
            messages.error(request, 'Empty Fields')
            return render(request, 'users/signup.html')

        if User.objects.filter(email=email).exists():
            messages.error(request, 'Email address is already in use')
            return render(request, 'users/signup.html')

        if password != password2:
            messages.error(request, 'Passwords do not match')           ##################3
            return render(request, 'users/signup.html')


        user = User.objects.create_user(username=username, email=email, password=password)
        user = authenticate(username=username, password=password)
        #login(request, user)
        return redirect('../../')

    return render(request, 'users/signup.html')



"""
def signup(request):
    if request.method == 'POST':    
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')
        #if firstname and lastname and email and password and password2:
        #for row in Signup.objects.all():
            #if row.email != email:
        if password == password2:
            #signup = Signup(username=username, email=email, password=password)#, password2=password2)
            #signup.save()
            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            return redirect('../../')
        else:
            return HttpResponseRedirect(request.path)
    return render(request, 'users/signup.html')
"""


"""
def signup(request):
 if request.method == 'POST':
     username = request.POST.get('username')
     email = request.POST.get('email')
     password = request.POST.get('password')
     password2 = request.POST.get('password2')
     if password == password2:
         user = User.objects.create_user(username=username, email=email, password=password)
         user.save()
         return redirect('../../')
 else:
    return HttpResponseRedirect(request.path)
 return render(request, 'users/signup.html')

"""