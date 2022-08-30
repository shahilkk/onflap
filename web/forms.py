from django import forms
from . models import *
from django.forms.widgets import SelectMultiple, TextInput, Textarea, EmailInput, CheckboxInput,URLInput, Select, NumberInput, RadioSelect, FileInput,ClearableFileInput,PasswordInput,DateInput



class ApplyNowForm(forms.ModelForm):
    class Meta:
        model = ApplyNow
        fields = ('applicant_name','email','phone','cv')
        widgets = {
            'applicant_name': TextInput(attrs={'class': 'form-control input-style-2','required': 'required', 'autocomplete':'off', 'placeholder':'Name','name':'applicant_name'}),
            'phone': TextInput(attrs={'class': 'form-control input-style-2','required': 'required', 'autocomplete':'off', 'placeholder':'Phone','name':'phone'}),
            'email': EmailInput(attrs={'class': 'form-control input-style-2', 'required': 'required', 'autocomplete':'off', 'placeholder':'E-mail','name':'email'}),
            'cv' : FileInput(attrs={'class': 'form-control input-style-2', 'required': 'required', 'autocomplete':'off','name':'cv','id':'files'}),
    }


class ContactUsForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ('cust_name','email','phone','message')
        widgets = {
            'cust_name': TextInput(attrs={'class': 'form-control input-style-2','required': 'required', 'autocomplete':'off', 'placeholder':'Name','name':'cust_name'}),
            'phone': TextInput(attrs={'class': 'form-control input-style-2','required': 'required', 'autocomplete':'off', 'placeholder':'Phone','name':'phone'}),
            'email': EmailInput(attrs={'class': 'form-control input-style-2', 'required': 'required', 'autocomplete':'off', 'placeholder':'E-mail','name':'email'}),
            'message' : Textarea(attrs={'class': 'form-control input-style-2', 'required': 'required', 'autocomplete':'off','name':'message','id':'message', 'placeholder':'Write Your Quries here....'}),
    }