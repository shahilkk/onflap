from django.shortcuts import render,redirect

from web.forms import ApplyNowForm,ContactUsForm
from .models import *
# from unicodedata import category

# Create your views here.
def base(request):
    return render(request,"web/partials/base.html")


def home(request):
    last_video = VideoUpload.objects.all().last()
    reviews = Review.objects.all()
    partners = Partners.objects.all()
    product_details = Product.objects.all()
    clients = ClientCategory.objects.filter(is_active =True)
    client_details = ClientList.objects.all()
    context = {
        "last_video":last_video,
        "reviews":reviews,
        "partners":partners,
        "product_details":product_details,
        "clients":clients,
        "client_details":client_details,
    }
    return render(request,"web/index.html",context)  

def productEnquiry(request,id):
    product = Product.objects.get(id=id)
    if request.method == 'POST':
        
        print(product)
        print('#'*20)
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        address = request.POST['address']
        product = product

        new_enquiry = ProductEnquiry(name=name,email=email,phone=phone,address=address,product=product)
        new_enquiry.save()

    return redirect('web:home')  


def about(request):
    return render(request,"web/about.html")    


# Career section
def career(request):
    jobs = JobCategory.objects.all()
    context = {
        "jobs":jobs,
    }
    return render(request,"web/career.html",context)   

def careerDetails(request,id):
    category = JobCategory.objects.get(id=id)
    career_details = JobDetails.objects.filter(job_category=category)
    context = {
        "careerdetails":career_details,
        "category":category, 
    }
    return render(request,'web/careerdetails.html',context)

def applynow(request,id):
    print('hello')
    Jobdetails = JobDetails.objects.get(id=id)
    apply_forms=ApplyNowForm(request.POST, request.FILES ) 
    # print('apply_forms')
    if request.method == 'POST' or 'FILES':
        # print('post worked')
        if apply_forms.is_valid():
            # print('valid')
            # print(apply_forms.errors)
            apply_data = apply_forms.save()   
            ApplyNow.objects.filter(id=apply_data.id).update(job=Jobdetails)
            return redirect('web:career')         
   
    context = {
            "form" : apply_forms,
        }
    return render(request,"web/applynow.html",context)




def contact(request):
    contactfrom = ContactUsForm(request.POST)
    if request.method == 'POST':
        print('hiii')
        if contactfrom.is_valid():
            print('hello')
            print(contactfrom.errors)
            contactfrom.save()
            print('2'*12)
            return redirect('web:home')
    context = {
        "contactfrom":contactfrom,
    }
    return render(request,"web/contact.html",context)    


def productdetails(request):
    return render(request,"web/productdetails.html")        
 

  