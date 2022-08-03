from django.urls import path
from . import views

app_name='web'

urlpatterns = [
    path('base',views.base,name='base'),
    path('',views.home,name='home'),
    path('about',views.about,name='about'),
    path('career',views.career,name='career'),
    path('contact',views.contact,name='contact'),
    path('productdetails',views.productdetails,name='productdetails'),
]
     