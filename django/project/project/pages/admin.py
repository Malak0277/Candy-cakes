from django.contrib import admin
from.models import Cakes
from.models import OrderForm
from.models import CustomizedForm

# Register your models here.
admin.site.register(Cakes)
admin.site.register(CustomizedForm)
admin.site.register(OrderForm)