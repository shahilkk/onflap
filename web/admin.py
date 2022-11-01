from django.contrib import admin
from web.models import AboutBanner, ApplyNow, Belifs, BelifsTitle, CareerBanner, ClientCategory, ClientList, Contact, IndianBanner, IndianBenefits, JobDetails, KuwaitBanner, KuwaitBenefits, MissionVision, Partners, Product, ProductDetails, ProductEnquiry, ProductFeatures, ProductImportantFeatures, RangeOfProduct, Review, BannerDescription, Services, Team, TeamTitle, WhatToExpect

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


class BannerDescriptionAdmin(admin.ModelAdmin):
    list_display = ('title', )
    search_fields = ('title', )


admin.site.register(BannerDescription, BannerDescriptionAdmin)


class RangeOfProductAdmin(admin.ModelAdmin):
    list_display = ('short_form','title','icon' )
    search_fields = ('short_form','title' )


admin.site.register(RangeOfProduct, RangeOfProductAdmin)


class ServicesAdmin(admin.ModelAdmin):
    list_display = ('title','icon' )
    search_fields = ('title',)


admin.site.register(Services, ServicesAdmin)


class AboutBannerAdmin(admin.ModelAdmin):
    list_display = ('title','description' )
    search_fields = ('title',)


admin.site.register(AboutBanner, AboutBannerAdmin)


class MissionVisionAdmin(admin.ModelAdmin):
    list_display = ('title','Mission','Vision' )
    search_fields = ('title',)


admin.site.register(MissionVision, MissionVisionAdmin)



admin.site.register(TeamTitle)


class TeamAdmin(admin.ModelAdmin):
    list_display = ('Member_name','Designation','image' )
    search_fields = ('Member_name','Designation')


admin.site.register(Team, TeamAdmin)


class CareerBannerAdmin(admin.ModelAdmin):
    list_display = ('Title','Description' )
    search_fields = ('Title','Description')


admin.site.register(CareerBanner, CareerBannerAdmin)


admin.site.register(BelifsTitle)


class BelifsAdmin(admin.ModelAdmin):
    list_display = ('Title','icons' )
    search_fields = ('Title','icons')


admin.site.register(Belifs, BelifsAdmin)


class WhatToExpectAdmin(admin.ModelAdmin):
    list_display = ('Title','Description' )
    search_fields = ('Title','Description')


admin.site.register(WhatToExpect, WhatToExpectAdmin)


class KuwaitBannerAdmin(admin.ModelAdmin):
    list_display = ('Title','Description' )
    search_fields = ('Title','Description')


admin.site.register(KuwaitBanner, KuwaitBannerAdmin)


class KuwaitBenefitsAdmin(admin.ModelAdmin):
    list_display = ('Title','Description' )
    search_fields = ('Title','Description')


admin.site.register(KuwaitBenefits, KuwaitBenefitsAdmin)



class IndianBannerAdmin(admin.ModelAdmin):
    list_display = ('Title','Description' )
    search_fields = ('Title','Description')


admin.site.register(IndianBanner, IndianBannerAdmin)


class IndianBenefitsAdmin(admin.ModelAdmin):
    list_display = ('Title','Description' )
    search_fields = ('Title','Description')


admin.site.register(IndianBenefits, IndianBenefitsAdmin)