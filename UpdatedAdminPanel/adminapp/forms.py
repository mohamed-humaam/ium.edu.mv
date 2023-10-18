from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import Section, Dean, Staff, Program


class SignUpForm(UserCreationForm):
    email = forms.EmailField(label="", widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Email Address'}))
    first_name = forms.CharField(label="", max_length=100, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'First Name'}))
    last_name = forms.CharField(label="", max_length=100, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Last Name'}))


    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'password1', 'password2')

        def __init__(self, *args, **kwargs):
            super(SignUpForm, self).__init__(*args, **kwargs)

            self.fields['username'].widget.attrs['class'] = 'form-control'
            self.fields['username'].widget.attrs['placeholder'] = 'User Name'
            self.fields['username'].label = ''
            self.fields['username'].help_text = '<span class="form-text text-muted"><small>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small></span>'

            self.fields['password1'].widget.attrs['class'] = 'form-control'
            self.fields['password1'].widget.attrs['placeholder'] = 'Password'
            self.fields['password1'].label = ''
            self.fields['password1'].help_text = '<ul class="form-text text-muted small"><li>Your password can\'t be too similar to your other personal information.</li><li>Your password must contain at least 8 characters.</li><li>Your password can\'t be a commonly used password.</li><li>Your password can\'t be entirely numeric.</li></ul>'

            self.fields['password2'].widget.attrs['class'] = 'form-control'
            self.fields['password2'].widget.attrs['placeholder'] = 'Confirm Password'
            self.fields['password2'].label = ''
            self.fields['password2'].help_text = '<span class="form-text text-muted"><small>Enter the same password as before, for verification.</small></span>'	


class AddSectionForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    message = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Dean Message'}))
    overview = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Overview'}))
    vision = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Vision'}))
    objective = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Objective'}))
    mission = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Mission'}))

    class Meta:
        model = Section
        exclude = ("user",)


class AddDeanForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Position'}))
    departmant = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Departmant'}))
    telephone = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Telephone'}))
    email = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Email'}))
    website = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Website'}))
    message = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Message'}))
    image_link = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Image Link'}))

    class Meta:
        model = Dean
        exclude = ("user",)


class AddStaffForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Position'}))
    departmant = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Departmant'}))
    type = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Type'}))
    image_link = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Image Link'}))

    class Meta:
        model = Staff
        exclude = ("user",)


class AddProgramForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    departmant = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Departmant'}))
    type = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Type'}))
    level = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Level'}))
    duration = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Duration'}))
    medium = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Medium'}))
    fee = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Fee'}))
    center = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Center'}))
    link = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Link'}))

    class Meta:
        model = Program
        exclude = ("user",)
