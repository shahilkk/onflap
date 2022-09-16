from unittest import result
from django.shortcuts import render,redirect

from web.forms import ApplyNowForm,ContactUsForm
from .models import *
from django.core.mail import EmailMessage
import base64
import imghdr
from django.conf import settings
import csv

from django.core.mail import send_mail
from django.conf import settings
from django.core.mail import EmailMultiAlternatives
import os
import json
import urllib

import urllib.parse
import urllib.request

# from . my_capta import FormWithCaptcha
# from unicodedata import category

# Create your views here.
def base(request):
    return render(request,"web/partials/base.html")


def home(request):
    # last_video = VideoUpload.objects.all().last()
    reviews = Review.objects.all()
    partners = Partners.objects.all()
    product_details = Product.objects.all()
    # for i in product_details :
    #     print(i.product_features)
    clients = ClientCategory.objects.filter(is_active =True)
    client_details = ClientList.objects.all()
    context = {
        "is_house":True,
        # "last_video":last_video,
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


def productdetails(request,id):
    product_obj = Product.objects.get(id=id)
    print(product_obj)
    productdetail_obj = ProductDetails.objects.get(product=product_obj)
    product_detail = ProductDetails.objects.filter(product=product_obj).values("features__features")
    # detailss = productdetail_obj.features
    # print(detailss)
    # print(productdetail_obj,"&"*10)
    context  = {
        "is_productdetails":True,
        "productdetail" : productdetail_obj,
        "detail":product_detail,
    }
    return render(request,"web/productdetails.html",context)     


def about(request):
    context = {
        "is_about":True,
    }
    return render(request,"web/about.html",context)    


# Career section
def career(request):
    jobs = JobDetails.objects.all()
    context = {
        "is_career":True,
        "jobs":jobs,
    }
    return render(request,"web/career.html",context)   


def careerDetails(request,id):
    category = JobDetails.objects.filter(id=id)
    print(category)
    context = {
        "is_careerDetails":True,
        # "careerdetails":career_details,
        "category":category, 
    }
    return render(request,'web/careerdetails.html',context)



def applynow(request,id):
    Jobdetails = JobDetails.objects.get(id=id)
    if request.method == 'POST':
        applicant_name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        cv = request.FILES['cv']
        job=Jobdetails

        new_application = ApplyNow(applicant_name=applicant_name,phone=phone,email=email,cv=cv,job=job)
        new_application.save()
        
        return redirect('web:career')         
   
    context = {
        "is_applynow":True,
        "Jobdetails":Jobdetails
    }
    return render(request,"web/applynow.html",context)





def contact(request):
    contactfrom = ContactUsForm(request.POST)
    if request.method == 'POST':
        if contactfrom.is_valid():
            print('hello')
            print(contactfrom.errors)
            contactfrom.save()
            print('2'*12)
            return redirect('web:home')
    context = {
        "is_contact":True,
        "contactfrom":contactfrom,
    }
    return render(request,"web/contact.html",context)    


   
 




# def applynow(request,id):
    
#     Jobdetails = JobDetails.objects.get(id=id)

#     if request.method == 'POST':
#         applicant_name = request.POST['name']
#         phone = request.POST['phone']
#         email = request.POST['email']
#         recapta = request.POST.get('g-recaptcha-response')
#         cv = request.FILES['cv']
#         job=Jobdetails

#         url = 'https://www.google.com/recaptcha/api/siteverify'
#         values = {
#                 'secret': settings.RECAPTCHA_SECRET_KEY,
#                 'response': recapta
#             }
#         data = urllib.parse.urlencode(values)
#         req = urllib.request.Request(url, data)
#         with urllib.request.urlopen(req,data=data) as f:
#             resp = f.read()
#             print(resp)
#             result = json.load(resp)
#         # req = urllib.request.Request(url, data=data)
#         # response = urllib.request.urlopen(req)
#         # result = json.load(response.read().decode())
#         # r=request.POST('https://www.google.com/recaptcha/api/siteverify',data=values) 
#         # result=r.json()
#         if result ['success']:
#             new_application = ApplyNow(applicant_name=applicant_name,phone=phone,email=email,cv=cv,job=job)
#             new_application.save()
#             # return redirect('web:career') 
#             subject ='The application '
#             message = new_application.applicant_name
#             email = 'mhdshd.ak@gmail.com'
#             try:

#                 mail = EmailMessage(subject, message, settings.EMAIL_HOST_USER, [email])
#                 print(cv.name, cv.read(), cv.content_type)
#                 print(cv,'#'*10)
#                 print(new_application.cv,'*'*10)
                
#                 file_path = f"{settings.MEDIA_ROOT}/cv/{cv.name}"
#                 print(file_path,'%'*10)
#                 mail.attach_file(file_path)
#                 # mail.content_type
#                 mail.send()
#                 return redirect('web:home')
#             except Exception as e:
#                 print(e)
#                 return redirect('web:contact')
#         else:
#             return redirect('web:contact')
#         # email = EmailMessage(
#         #     'Hello',
#         #     'Body goes here',
#         #     'from@example.com',
#         #     ['mhdshd.ak@gmail.com'],
#         #   headers={'Message-ID': 'foo'},
#         # )
#         # email.attach(cv,'new_application.cv')
#         # email.send()
        
        
#         # message.attach_file(new_application.cv)
        
#     # apply_forms=ApplyNowForm(request.POST, request.FILES ) 
#     # # print('apply_forms')
#     # if request.method == 'POST' or 'FILES':
#     #     # print('post worked')
#     #     if apply_forms.is_valid():
#     #         # print('valid')
#     #         # print(apply_forms.errors)
#     #         apply_data = apply_forms.save()   
#     #         ApplyNow.objects.filter(id=apply_data.id).update(job=Jobdetails)
#     #         email = EmailMessage(
#     #         'Subject here', 'Here is the message.', 'apply_data.email', ['mhdshd.ak@gmail.com'])
#     #         with open(apply_data.cv, "rb") as f:
#     #             encoded_string = f.read()
#     #             filetype= imghdr.what(f.name)
#     #             print(filetype,'""'*6)
#     #         email.attach_file(apply_data.cv)
#     #         email.send()
#     #         return redirect('web:career')         
   
#     context = {
#         "is_applynow":True,
#         "Jobdetails":Jobdetails,
#         "capta":FormWithCaptcha
#     }
#     return render(request,"web/applynow.html",context)

def handler404(request,exception):
    return render(request, 'web/404.html', status=404)



def handler500(request, *args, **argv):
    response = render("web/500.html")
    response.status_code = 500
    return response


def indianBenfits(request):
    context={
        "is_benefits":True,
    }
    return render(request,"web/indian_benefits.html",context)