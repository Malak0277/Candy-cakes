from django.urls import path
from . import views

urlpatterns = [
    path('customize_order/', views.custom, name='custom'),
    path('order_now/', views.orderNow, name='orderNow'),
]
