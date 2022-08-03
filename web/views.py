from django.shortcuts import render
from .models import *

# Create your views here.
def base(request):
    return render(request,"web/partials/base.html")


def home(request):
    return render(request,"web/index.html")    


def about(request):
    return render(request,"web/about.html")    

def career(request):
    return render(request,"web/career.html")     

def contact(request):
    return render(request,"web/contact.html")    


def productdetails(request):
    return render(request,"web/productdetails.html")        