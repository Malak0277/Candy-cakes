from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('birthday/', views.bday, name='bday'),
    path('wedding/', views.wedding, name='wedding'),
    path('eid/', views.eid, name='eid'),
    path('minis/', views.minis, name='minis'),
    path('others/', views.others, name='others'),
    path('form/customize_order/', views.custom, name='custom'),
    path('form/order_now/', views.orderNow, name='orderNow'),
]