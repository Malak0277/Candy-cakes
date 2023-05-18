from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('birthday/', views.bday, name='bday'),
    path('form/', views.form, name='form'),
    path('wedding/', views.wedding, name='wedding'),
    path('eid/', views.eid, name='eid'),
    path('minis/', views.minis, name='minis'),
    path('others/', views.others, name='others'),
]
