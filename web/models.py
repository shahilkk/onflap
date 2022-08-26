from secrets import choice
from django.db import models
from tinymce.models import HTMLField

# Create your models here.

class VideoUpload(models.Model):
    video = models.FileField(upload_to='videos',null=True)

class JobCategory(models.Model):
    jobtype_choice =(('Full time','full time'),('Part time','part time'))
    department = models.CharField(max_length=100)
    job_title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
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
        return str(self.department)
