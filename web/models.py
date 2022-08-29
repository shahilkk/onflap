from email import message
from secrets import choice
from xml.parsers.expat import model
from django.db import models
from tinymce.models import HTMLField
from phone_field import PhoneField
from django.template.defaultfilters import slugify
# from unidecode import unidecode
from django.utils.text import slugify

# Create your models here.

class VideoUpload(models.Model):
    video = models.FileField(upload_to='videos',null=True)


class JobCategory(models.Model):
    department = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    
    def __str__(self):
        return str(self.department)


class JobDetails(models.Model):
    job_category = models.ForeignKey(JobCategory,on_delete=models.CASCADE)
    jobtype_choice =(('Full time','full time'),('Part time','part time'))
    job_title = models.CharField(max_length=50)
    vaccancy = models.IntegerField()
    job_responsibility = HTMLField()
    educational_requirments = HTMLField()
    experience_requirments = HTMLField()
    additional_requirments = HTMLField()
    location = models.CharField(max_length=50)
    job_type = models.CharField(max_length=30, choices=jobtype_choice)
    experience = models.CharField(max_length=100)
    salary = models.IntegerField()
    

    def __str__(self):
        return str(self.job_title)

class ApplyNow(models.Model):
    job = models.ForeignKey(JobDetails,on_delete=models.CASCADE,null=True)
    applicant_name = models.CharField(max_length=100)
    phone = models.CharField(unique=True,max_length=100)
    email = models.EmailField()
    cv = models.FileField(upload_to='cv')

    def __str__(self):
        return str(self.applicant_name)


class Review(models.Model):
    review = models.TextField()
    name = models.CharField(max_length=50)

    def __str__(self):
        return str(self.name)


class Partners(models.Model):
    partner_name = models.CharField(max_length=100)
    logo = models.FileField(upload_to='partners')

    def __str__(self):
        return str(self.partner_name)


class Contact(models.Model):
    cust_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=12)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return str(self.cust_name)


class Product(models.Model):
    product_name = models.CharField(max_length=50)
    product_fullname = models.CharField(max_length=100,null=True)
    product_logo = models.FileField(upload_to='product_log',null=True)
    product_features = HTMLField()

    def __str__(self):
        return str(self.product_name)


class ProductEnquiry(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=12)
    address = models.TextField()
    product = models.ForeignKey(Product,on_delete=models.CASCADE)

    def __str__(self):
        return str(self.name)

class ClientCategory(models.Model):
    title = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)


class ClientList(models.Model):
    category = models.ForeignKey(ClientCategory, on_delete=models.CASCADE)
    Client_name = models.CharField(max_length=200)
    description = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, null=True, blank=True)
