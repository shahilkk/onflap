from django.shortcuts import render
from .models import *

# Create your views here.
def base(request):
    return render(request,"web/base.html")