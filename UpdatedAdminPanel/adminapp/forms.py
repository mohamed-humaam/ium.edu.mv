from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
from .models import Section, Dean, Staff, Program, TopManagement, SMT, AcademicBoard, Manhaj, AnnualReport, RulesRegulations, DeansCommittee, CurriculumCommittee, HRMD, Gazette, News, Adhaahama, Collaborators, ContactUs, Convocation, History


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

    TYPE_ROLES= [
      ('admin', 'Admin'),
      ('academic', 'Academic'),
]

    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Position'}))
    departmant = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Departmant'}))
    type = forms.CharField(label='Choose Type', widget=forms.Select(choices=TYPE_ROLES))
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


class AddTopManagementForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    designation = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Designation'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Committee Position'}))
    
    class Meta:
        model = TopManagement
        exclude = ("user",)

class AddSMTForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    designation = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Designation'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Committee Position'}))
    
    class Meta:
        model = SMT
        exclude = ("user",)

class AddAcademicBoardForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    designation = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Designation'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Committee Position'}))
    
    class Meta:
        model = AcademicBoard
        exclude = ("user",)

class AddDeansCommitteeForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    designation = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Designation'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Committee Position'}))
    
    class Meta:
        model = DeansCommittee
        exclude = ("user",)


class AddCurriculumCommitteeForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    designation = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Designation'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Committee Position'}))
    
    class Meta:
        model = CurriculumCommittee
        exclude = ("user",)

class AddHRMDForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    designation = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Designation'}))
    position = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Committee Position'}))
    
    class Meta:
        model = HRMD
        exclude = ("user",)



class AddGazetteForm(forms.ModelForm):
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    number = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Number'}))
    category = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Category'}))
    date = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Date'}))
    class Meta:
        model = Gazette
        exclude = ("user",)

class AddNewsForm(forms.ModelForm):
    title = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Title'}))
    description = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Description'}))
    
    
    class Meta:
        model = News
        exclude = ("user",)

class AddAdhaahamaForm(forms.ModelForm):
    year = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Year'}))
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    
    class Meta:
        model = Adhaahama
        exclude = ("user",)

class AddManhajForm(forms.ModelForm):
    year = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Year'}))
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    
    class Meta:
        model = Manhaj
        exclude = ("user",)
    
class AddAnnualReportForm(forms.ModelForm):
    year = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Year'}))
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    
    class Meta:
        model = AnnualReport
        exclude = ("user",)

class AddRulesRegulationsForm(forms.ModelForm):
    title = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Title'}))
    category = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Category'}))
    type = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Type'}))
    
    class Meta:
        model = RulesRegulations
        exclude = ("user",)

class AddCollaboratorsForm(forms.ModelForm):
    TYPE_ROLES= [
      ('international', 'International Collaborators'),
      ('local', 'Local Collaborators'),
    ]

    institution = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Institution'}))
    signed = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Signed Date'}))
    expires = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Expire Date'}))
    type = forms.CharField(label='Choose Type', widget=forms.Select(choices=TYPE_ROLES))
    
    class Meta:
        model = Collaborators
        exclude = ("user",)

class AddContactUsForm(forms.ModelForm):
    
    department = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Department'}))
    code = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Code'}))
    email = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Email'}))
    
    class Meta:
        model = ContactUs
        exclude = ("user",)


class AddConvocationForm(forms.ModelForm):
    
    year = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Year'}))
    name = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Name'}))
    batch = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Batch'}))
    
    class Meta:
        model = Convocation
        exclude = ("user",)

class AddHistoryForm(forms.ModelForm):
    
    title = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Title'}))
    content = forms.CharField(label="", required=True, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Content'}))
    
    class Meta:
        model = History
        exclude = ("user",)