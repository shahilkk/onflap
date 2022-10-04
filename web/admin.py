from django.contrib import admin
from web.models import ApplyNow, ClientCategory, ClientList, Contact, JobDetails, Partners, Product, ProductDetails, ProductEnquiry, ProductFeatures, ProductImportantFeatures, Review

# Register your models here.


# admin.site.register(VideoUpload)
# admin.site.register(JobCategory)


class JobDetailsAdmin(admin.ModelAdmin):
    list_display = ('job_title', 'location', 'work_mode')
    search_fields = ('job_title', 'location')


admin.site.register(JobDetails, JobDetailsAdmin)


class ApplyNowAdmin(admin.ModelAdmin):
    list_display = ('applicant_name', 'job', 'cv')
    search_fields = ('job_title', )


admin.site.register(ApplyNow, ApplyNowAdmin)


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review', 'name')
    search_fields = ('name', )


admin.site.register(Review, ReviewAdmin)


class PartnersAdmin(admin.ModelAdmin):
    list_display = ('partner_name', 'logo')
    search_fields = ('partner_name', )


admin.site.register(Partners, PartnersAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = ('cust_name', 'message')
    search_fields = ('partner_name', )


admin.site.register(Contact, ContactAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'product_fullname')
    search_fields = ('product_name', )


admin.site.register(Product, ProductAdmin)


class ProductEnquiryAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'product')
    search_fields = ('name', )


admin.site.register(ProductEnquiry, ProductEnquiryAdmin)


class ProductDetailsAdmin(admin.ModelAdmin):
    list_display = ('product', )
    search_fields = ('product', )


admin.site.register(ProductDetails, ProductDetailsAdmin)


class ClientCategoryAdmin(admin.ModelAdmin):
    list_display = ('title', )
    search_fields = ('title', )


admin.site.register(ClientCategory, ClientCategoryAdmin)


class ClientListAdmin(admin.ModelAdmin):
    list_display = ('category', 'Client_name')
    search_fields = ('category', )


admin.site.register(ClientList, ClientListAdmin)


class ProductFeaturesAdmin(admin.ModelAdmin):
    list_display = ('features', )
    search_fields = ('features', )


admin.site.register(ProductFeatures, ProductFeaturesAdmin)


class ProductImportantFeaturesAdmin(admin.ModelAdmin):
    list_display = ('features', )
    search_fields = ('features', )


admin.site.register(ProductImportantFeatures, ProductImportantFeaturesAdmin)
