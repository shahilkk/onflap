from django.contrib import admin

from . models import *

# Register your models here.


admin.site.register(VideoUpload)
admin.site.register(JobCategory)


class JobDetailsAdmin(admin.ModelAdmin):
    list_display = ('job_title','job_category')
    search_fields=('job_title',)
admin.site.register(JobDetails,JobDetailsAdmin)


class ApplyNowAdmin(admin.ModelAdmin):
    list_display = ('applicant_name','job')
    search_fields=('job_title',)
admin.site.register(ApplyNow,ApplyNowAdmin)

class ReviewAdmin(admin.ModelAdmin):
    list_display = ('review','name')
    search_fields=('name',)
admin.site.register(Review,ReviewAdmin)


class PartnersAdmin(admin.ModelAdmin):
    list_display = ('partner_name','logo')
    search_fields=('partner_name',)
admin.site.register(Partners,PartnersAdmin)


class ContactAdmin(admin.ModelAdmin):
    list_display = ('cust_name','message')
    search_fields=('partner_name',)
admin.site.register(Contact,ContactAdmin)