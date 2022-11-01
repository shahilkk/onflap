from django.db import models
from tinymce.models import HTMLField
from django.template.defaultfilters import slugify
# from unidecode import unidecode
from django.utils.text import slugify

# Create your models here.


class JobDetails(models.Model):
    jobtype_choice = (('On-site ', 'On-site '), ('Hybrid', 'Hybrid'))
    job_title = models.CharField(max_length=50, null=True, blank=True)
    location = models.CharField(max_length=50, null=True, blank=True)
    work_mode = models.CharField(max_length=50,  choices=jobtype_choice, null=True, blank=True)
    salary = models.CharField(max_length=50, null=True, blank=True)
    vaccancy = models.IntegerField(null=True, blank=True)
    experience = models.IntegerField(null=True, blank=True)
    job_description = HTMLField(null=True, blank=True)
    job_responsibility = HTMLField(null=True, blank=True)
    educational_requirments = HTMLField(null=True, blank=True)

    class Meta:
        verbose_name_plural = ("Jobs")

    def __str__(self):
        return str(self.job_title)


class ApplyNow(models.Model):
    job = models.ForeignKey(JobDetails, on_delete=models.CASCADE, null=True, blank=True)
    applicant_name = models.CharField(max_length=100, null=True, blank=True)
    phone = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField()
    cv = models.FileField(upload_to='cv', null=True, blank=True)

    class Meta:
        verbose_name_plural = ("Applications")

    def __str__(self):
        return str(self.applicant_name)


class Review(models.Model):
    review = models.TextField()
    name = models.CharField(max_length=50, null=True, blank=True)
    pro_pic = models.FileField(upload_to='review', null=True, default='default_test.jpg', blank=True)
    position = models.CharField(max_length=100, null=True, blank=True)
    company_name = models.CharField(max_length=150, null=True, blank=True)
    location = models.CharField(max_length=150, null=True, blank=True)

    class Meta:
        verbose_name_plural = ("Reviews")

    def __str__(self):
        return str(self.name)


class Partners(models.Model):
    partner_name = models.CharField(max_length=100, null=True, blank=True)
    logo = models.FileField(upload_to='partners', null=True, blank=True)

    class Meta:
        verbose_name_plural = ("Partners")

    def __str__(self):
        return str(self.partner_name)


class Contact(models.Model):
    cust_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=12)
    email = models.EmailField()
    message = models.TextField()

    class Meta:
        verbose_name_plural = ("Contacts")

    def __str__(self):
        return str(self.cust_name)


class ProductImportantFeatures(models.Model):
    features = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return str(self.features)


class Product(models.Model):
    product_name = models.CharField(max_length=50, null=True, blank=True)
    product_fullname = models.CharField(max_length=100, null=True, blank=True)
    product_logo = models.FileField(upload_to='product_log', null=True, blank=True)
    product_features = models.ManyToManyField(ProductImportantFeatures, null=True, blank=True)

    class Meta:
        verbose_name_plural = ("Products")

    def __str__(self):
        return str(self.product_name)


class ProductFeatures(models.Model):
    features = models.CharField(max_length=1000, null=True, blank=True)

    def __str__(self):
        return str(self.features)


class ProductDetails(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    heading1 = models.CharField(max_length=500, null=True, blank=True)
    heading2 = models.CharField(max_length=500, null=True, blank=True)
    description = models.CharField(max_length=1500, null=True, blank=True)
    features = models.ManyToManyField(ProductFeatures, null=True, blank=True)

    class Meta:
        verbose_name_plural = ("Product Details")

    def __str__(self):
        return str(self.product)


class ProductEnquiry(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=12)
    address = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = ("Product Enquiries")

    def __str__(self):
        return str(self.name)


class ClientCategory(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    is_active = models.BooleanField(default=True, blank=True)

    class Meta:
        verbose_name_plural = ("Client Categories")

    def __str__(self):
        return str(self.title)


class ClientList(models.Model):
    category = models.ForeignKey(ClientCategory,  on_delete=models.CASCADE)
    Client_name = models.CharField(max_length=200, null=True, blank=True)
    description = models.CharField(max_length=100, null=True, blank=True)
    client_log = models.FileField(upload_to='clientlogo', null=True, blank=True)
    slug = models.SlugField(unique=True,  null=True,  blank=True)

    class Meta:
        verbose_name_plural = ("Client Lists")


class BannerDescription(models.Model):
    title = models.CharField(max_length=300, null=True, blank=True)
    description = HTMLField(max_length=820, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Banner Description")

    def __str__(self):
        return str(self.title)


class RangeOfProduct(models.Model):
    short_form = models.CharField(max_length=50, null=True, blank=True)
    title = models.CharField(max_length=300, null=True, blank=True)
    icon = models.FileField(upload_to='rangeof_products', null=True, blank=True)
    description = HTMLField(null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Range of Product")

    def __str__(self):
        return str(self.title)


class Services(models.Model):
    icon = models.FileField(upload_to='services', null=True, blank=True)
    title = models.CharField(max_length=300, null=True, blank=True)
    description = HTMLField(null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Services")

    def __str__(self):
        return str(self.title)


class AboutBanner(models.Model):
    title = models.CharField(max_length=300, null=True, blank=True)
    description = HTMLField(null=True, blank=True)
    class Meta:
        verbose_name_plural = ("About Banner")

    def __str__(self):
        return str(self.title)


class MissionVision(models.Model):
    title = models.CharField(max_length=300, null=True, blank=True)
    Mission = HTMLField(null=True, blank=True)
    Vision = HTMLField(null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Mission Vision")

    def __str__(self):
        return str(self.title)


class TeamTitle(models.Model):
    title = models.CharField(max_length=300, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Team Title")

    def __str__(self):
        return str(self.title)


class Team(models.Model):
    image = models.FileField(upload_to='Team', null=True, blank=True)
    Member_name = models.CharField(max_length=300, null=True, blank=True)
    Designation = models.CharField(max_length=300, null=True, blank=True)
    review = HTMLField(null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Team")

    def __str__(self):
        return str(self.Member_name)


class CareerBanner(models.Model):
    Title = models.CharField(max_length=300, null=True, blank=True)
    Description = HTMLField(null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Career Banner")

    def __str__(self):
        return str(self.Title)


class BelifsTitle(models.Model):
    title = models.CharField(max_length=300, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Belifs Title")

    def __str__(self):
        return str(self.title)


class Belifs(models.Model):
    icons = models.FileField(upload_to='Belifs', null=True, blank=True)
    Title = models.CharField(max_length=300, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Onflap Belifs")

    def __str__(self):
        return str(self.Title)


class WhatToExpect(models.Model):
    Title = models.CharField(max_length=300, null=True, blank=True)
    Description = models.CharField(max_length=335, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("What To Expect")

    def __str__(self):
        return str(self.Title)


class KuwaitBanner(models.Model):
    Title = models.CharField(max_length=300, null=True, blank=True)
    Description =  models.CharField(max_length=550, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Kuwait Banner")

    def __str__(self):
        return str(self.Title)


class KuwaitBenefits(models.Model):
    Title = models.CharField(max_length=300, null=True, blank=True)
    Description = HTMLField(max_length=550, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Kuwait Benefits")

    def __str__(self):
        return str(self.Title)


class IndianBanner(models.Model):
    Title = models.CharField(max_length=300, null=True, blank=True)
    Description = models.CharField(max_length=550, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Indian Banner")

    def __str__(self):
        return str(self.Title)


class IndianBenefits(models.Model):
    Title = models.CharField(max_length=300, null=True, blank=True)
    Description = HTMLField(max_length=550, null=True, blank=True)
    class Meta:
        verbose_name_plural = ("Indain Benefits")

    def __str__(self):
        return str(self.Title)