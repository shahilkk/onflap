from django.shortcuts import render
from .models import *

# Create your views here.
def base(request):
    return render(request,"web/partials/base.html")


def home(request):
    last_video = VideoUpload.objects.all().last()
    context = {
        "last_video":last_video,
        
    }
    return render(request,"web/index.html",context)    


def about(request):
    return render(request,"web/about.html")    

def career(request):
    jobs = JobCategory.objects.all()
    context = {
        "jobs":jobs,
    }
    return render(request,"web/career.html",context)     

def contact(request):
    return render(request,"web/contact.html")    


def productdetails(request):
    return render(request,"web/productdetails.html")        


def careerdetails(request):
    return render(request,"web/careerdetails.html")   



def applynow(request):
    return render(request,"web/applynow.html")   



def blog(request):
    return render(request,"web/blogs.html")   


def testimonial(request):
    return render(request,"web/testimonial.html")   