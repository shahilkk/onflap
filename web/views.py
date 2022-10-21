from http.client import HTTPException
import json
from django.shortcuts import render, redirect
from web.forms import ContactUsForm, Myform
from web.models import ApplyNow, ClientCategory, ClientList, JobDetails, Partners, Product, ProductDetails, ProductEnquiry, Review
from django.core.mail import EmailMessage
from django.conf import settings
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse



# Create your views here.
def base(request):
    return render(request, "web/partials/base.html")


def home(request):
    reviews = Review.objects.all()
    partners = Partners.objects.all()
    product_details = Product.objects.all().order_by()
    clients = ClientCategory.objects.filter(is_active=True)
    client_details = ClientList.objects.all()
    form = Myform()
    context = {
        "is_house": True,
        "reviews": reviews,
        "partners": partners,
        "product_details": product_details,
        "clients": clients,
        "client_details": client_details,
        "form": form
    }
    return render(request, "web/index.html", context)


# product enquiry
def productEnquiry(request, id):
    product = Product.objects.get(id=id)
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        address = request.POST['address']
        product = product
        form = Myform(request.POST)
        if form.is_valid():
            new_enquiry = ProductEnquiry(name=name, email=email, phone=phone, address=address, product=product)
            new_enquiry.save()
            messages.error(request, "Product Enquiry sUCCESSFULLY SENDED")
        else:
            messages.error(request, "Wrong Captcha")
    form = Myform()
    return redirect('web: home')


def productdetails(request, id):
    product_obj = Product.objects.get(id=id)
    print(product_obj)
    productdetail_obj = ProductDetails.objects.get(product=product_obj)
    product_detail = ProductDetails.objects.filter(product=product_obj).values("features__features")
    context = {
        "is_productdetails": True,
        "productdetail":  productdetail_obj,
        "detail": product_detail,
    }
    return render(request, "web/productdetails.html", context)


def about(request):
    context = {
        "is_house": True,
    }
    return render(request, "web/about.html", context)


# Career section
def careers(request):
    context = {
        "is_career": True,
    }
    return render(request, "web/careers.html",context)


def career(request):
    jobs = JobDetails.objects.all().order_by()
    # job = jobs
    location = JobDetails.objects.all().values("location").order_by("location").distinct()


    # global search
    search_term = ''
    if 'search' in request.GET:
        search_term = request.GET['search']
        jobs = JobDetails.objects.all().filter(job_title__icontains=search_term)
        context = {
            "is_career": True,
            "jobs": jobs,
        }
        return render(request, "web/career.html", context)


    context = {
        "is_career": True,
        "jobs": jobs,
        "locations":location,
    }
    return render(request, "web/career.html", context)


@csrf_exempt
def searchjob(request):
    if request.method == 'POST':

        jobtype = request.POST['jobtype']
        joblocation = request.POST['joblocation']
        jobs = JobDetails.objects.filter(work_mode=jobtype,location=joblocation)
        data = []

        for job in jobs:
            jobitem = {
                "id" : job.id,
                "location" : job.location,
                "work_mode" : job.work_mode,
                "experience" : job.experience,
                "vaccancy" : job.vaccancy,
            }
            
            data.append(jobitem)
        print(data)    
        return JsonResponse({'data':data,})


def careerDetails(request, id):
    category = JobDetails.objects.filter(id=id)
    context = {
        "is_careerDetails": True,
        "category": category,
    }
    return render(request, 'web/careerdetails.html', context)


# apply now(cv send to official mail)
def applynow(request, id):
    Jobdetails = JobDetails.objects.get(id=id)
    if request.method == 'POST':
        applicant_name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        cv = request.FILES['cv']
        job = Jobdetails
        form = Myform(request.POST)
        if form.is_valid():
            print('print Valid')
            new_application = ApplyNow(applicant_name=applicant_name, phone=phone, email=email, cv=cv, job=job)
            new_application.save()
            subject = 'The new application is arrived'
            message = new_application.applicant_name
            email = ' admin@onflap.com'
            try:
                # print('try')
                mail = EmailMessage(subject, message, settings.EMAIL_HOST_USER, [email])
                # print(cv.name, cv.read(), cv.content_type)
                # print(cv,'#'*10)
                # print(new_application.cv,'*'*10)
                file_path = f"{settings.MEDIA_ROOT}/cv/{cv.name}"
                # print(file_path,'%'*10)
                mail.attach_file(file_path)
                # mail.content_type
                mail.send()
                messages.success(request, "Sucess")
            except Exception as e:
                # print('except')
                # print(str(e))
                raise HTTPException(str(e))
        else:
            print('else')
            messages.error(request, "Wrong Captcha")
    form = Myform()
    context = {
        "is_applynow": True,
        "form": form,
        "Jobdetails": Jobdetails,
    }
    return render(request, "web/applynow.html", context)


# benefits
def indianBenfits(request):
    context = {
        "is_benefits": True,
    }
    return render(request, "web/indian_benefits.html", context)


def kuwaitBenefits(request):
    context = {
        "is_benefits": True,
    }
    return render(request, "web/kuwait_benefits.html", context)


# contact section
def contact(request):
    contactfrom = ContactUsForm(request.POST)
    # print("get"*10)
    # form = Myform(request.POST)
    if request.method == 'POST':
        print("post"*10)
        form = Myform(request.POST)
        if form.is_valid():
            # print("form valid"*10)
            # print('hello')
            # print(contactfrom.errors)
            contactfrom.save()
            messages.error(request, "SUCCESSFUL Captcha")
            # print('2'*12)
            
        else:
            print("form not valid"*10)
            messages.error(request, "Wrong Captcha")
    form = Myform()
    # print("Lelse"*10)
    context = {
        "is_contact": True,
        "contactfrom": contactfrom,
        "form": form
    }
    return render(request, "web/contact.html", context)


def handler404(request, exception):
    return render(request, 'web/404.html', status=404)


def handler500(request, *args, **argv):
    response = render("web/500.html")
    response.status_code = 500
    return response
