from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import SignUpForm, AddSectionForm, AddDeanForm, AddStaffForm, AddProgramForm,AddManhajForm, AddAnnualReportForm, AddTopManagementForm, AddSMTForm, AddAcademicBoardForm, AddDeansCommitteeForm, AddCurriculumCommitteeForm, AddHRMDForm, AddGazetteForm, AddNewsForm, AddAdhaahamaForm, AddRulesRegulationsForm, AddCollaboratorsForm, AddContactUsForm, AddConvocationForm, AddHistoryForm
from .models import Section, Dean, Staff, Program, TopManagement, SMT, AcademicBoard,Manhaj, AnnualReport, DeansCommittee, CurriculumCommittee, HRMD, Gazette, News, Adhaahama, RulesRegulations, Collaborators, ContactUs, Convocation, History
from rest_framework import viewsets
from .models import Section
from .serializers import SectionSerializer



class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer



# Create your views here.
def home(request):
    sections = Section.objects.all().count()
    deans = Dean.objects.all().count()
    staff = Staff.objects.all().count()
    programs = Program.objects.all().count()
    topmanagement = TopManagement.objects.all().count()
    academicboard = AcademicBoard.objects.all().count()
    smt = SMT.objects.all().count()
    deanscommittee = DeansCommittee.objects.all().count()
    curriculumcommittee = CurriculumCommittee.objects.all().count()
    hrmd = HRMD.objects.all().count()
    gazette = Gazette.objects.all().count()
    news = News.objects.all().count()
    adhaahama = Adhaahama.objects.all().count()
    manhaj = Manhaj.objects.all().count()
    annualreport = AnnualReport.objects.all().count()
    rulesregulations = RulesRegulations.objects.all().count()
    collaborators = Collaborators.objects.all().count()
    contactus = ContactUs.objects.all().count()
    convocation = Convocation.objects.all().count()
    history = History.objects.all().count()




    counts = {'sections': sections, 'deans': deans, 'staff': staff, 'programs': programs, 'topmanagement': topmanagement, 'academicboard': academicboard, 'smt': smt, 'deanscommittee': deanscommittee, 'curriculumcommittee' : curriculumcommittee, 'hrmd' : hrmd, 'gazette' : gazette, 'news' : news, 'adhaahama' : adhaahama, 'manhaj': manhaj, 'annualreport' : annualreport, 'rulesregulations' : rulesregulations, 'collaborators' : collaborators, 'contactus' : contactus, 'convocation' : convocation, 'history' : history}

    if request.method == 'POST':
        email = request.POST['user_email']
        password = request.POST['password']

        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, 'You are logged in!')
            return redirect('home')
        else:
            messages.error(request, 'There was a error logging in...')
            return redirect('home')
    else:
        return render(request, 'home.html', {'counts': counts})
    
# Authentication

def logout_user(request):
    logout(request)
    messages.success(request, 'You have logged out...')
    return redirect('home')

def signup_user(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            messages.success(request, 'You are logged in!')
            return redirect('home')
    else:
        form = SignUpForm()            
        return render(request, 'register.html', {'form':form})
    
    return render(request, 'register.html', {'form':form})

# Sections CRUD

def sections(request):
    if request.user.is_authenticated:
        sections = Section.objects.all()
        return render(request, 'sections.html', {'sections': sections})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_section(request, pk):
    if request.user.is_authenticated:
        section = Section.objects.get(id=pk)
        return render(request, 'view_section.html', {'section':section})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def delete_section(request, pk):
    if request.user.is_authenticated:
        section = Section.objects.get(id=pk)
        section.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def add_section(request):
    form = AddSectionForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                add_record = form.save()
                messages.success(request, "Section added...")
                return redirect('home')
        return render(request, 'add_section.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def update_section(request, pk):
    if request.user.is_authenticated:
        section = Section.objects.get(id=pk)
        form = AddSectionForm(request.POST or None, instance=section)
        if form.is_valid():
            updated_record = form.save()
            messages.success(request, "Section updated...")
            return redirect('home')
        return render(request, 'update_section.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    

# Deans CRUD

def deans_list(request):
    if request.user.is_authenticated:
        deans_list = Dean.objects.all()
        return render(request, 'deans_list.html', {'deans_list': deans_list})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_dean(request, pk):
    if request.user.is_authenticated:
        dean = Dean.objects.get(id=pk)
        return render(request, 'view_dean.html', {'dean':dean})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def delete_dean(request, pk):
    if request.user.is_authenticated:
        dean = Dean.objects.get(id=pk)
        dean.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def add_dean(request):
    form = AddDeanForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Dean added...")
                return redirect('home')
        return render(request, 'add_dean.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def update_dean(request, pk):
    if request.user.is_authenticated:
        section = Dean.objects.get(id=pk)
        form = AddDeanForm(request.POST or None, instance=section)
        if form.is_valid():
            form.save()
            messages.success(request, "Dean updated...")
            return redirect('home')
        return render(request, 'update_dean.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    

# Staff CRUD

def staff_list(request):
    if request.user.is_authenticated:
        staff_list = Staff.objects.all()
        return render(request, 'staff_list.html', {'staff_list': staff_list})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_staff(request, pk):
    if request.user.is_authenticated:
        staff = Staff.objects.get(id=pk)
        return render(request, 'view_staff.html', {'staff':staff})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def delete_staff(request, pk):
    if request.user.is_authenticated:
        staff = Staff.objects.get(id=pk)
        staff.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def add_staff(request):
    form = AddStaffForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Staff added...")
                return redirect('home')
        return render(request, 'add_staff.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def update_staff(request, pk):
    if request.user.is_authenticated:
        staff = Staff.objects.get(id=pk)
        form = AddStaffForm(request.POST or None, instance=staff)
        if form.is_valid():
            form.save()
            messages.success(request, "Staff updated...")
            return redirect('home')
        return render(request, 'update_staff.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


# Programs CRUD

def program_list(request):
    if request.user.is_authenticated:
        program_list = Program.objects.all()
        return render(request, 'program_list.html', {'program_list': program_list})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_program(request, pk):
    if request.user.is_authenticated:
        program = Program.objects.get(id=pk)
        return render(request, 'view_program.html', {'program':program})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def delete_program(request, pk):
    if request.user.is_authenticated:
        program = Program.objects.get(id=pk)
        program.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def add_program(request):
    form = AddProgramForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Program added...")
                return redirect('home')
        return render(request, 'add_program.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')
    
def update_program(request, pk):
    if request.user.is_authenticated:
        program = Program.objects.get(id=pk)
        form = AddProgramForm(request.POST or None, instance=program)
        if form.is_valid():
            form.save()
            messages.success(request, "Program updated...")
            return redirect('home')
        return render(request, 'update_program.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')



def add_top_management(request):
    form = AddTopManagementForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_top_management.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def top_management(request):
    if request.user.is_authenticated:
        top_management = TopManagement.objects.all()
        return render(request, 'top_management.html', {'top_management': top_management})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_top_management(request, pk):
    if request.user.is_authenticated:
        topmanagement = TopManagement.objects.get(id=pk)
        return render(request, 'view_top_management.html', {'topmanagement':topmanagement})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_top_management(request, pk):
    if request.user.is_authenticated:
        topmanagement = TopManagement.objects.get(id=pk)
        topmanagement.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_top_management(request, pk):
    if request.user.is_authenticated:
        topmanagement = TopManagement.objects.get(id=pk)
        form = AddTopManagementForm(request.POST or None, instance=topmanagement)
        if form.is_valid():
            form.save()
            messages.success(request, "Management updated...")
            return redirect('home')
        return render(request, 'update_top_management.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_top_management(request):  
    if request.method == 'POST':  
        form = AddTopManagementForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            return render(request, 'add_top_management.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddTopManagementForm()  
    return render(request, 'add_top_management.html', {'form': form})

    #smt

    

def add_smt(request):
    form = AddSMTForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_smt.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def smt(request):
    if request.user.is_authenticated:
        smt = SMT.objects.all()
        return render(request, 'smt.html', {'smt': smt})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_smt(request, pk):
    if request.user.is_authenticated:
        smt = SMT.objects.get(id=pk)
        return render(request, 'view_smt.html', {'smt':smt})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_smt(request, pk):
    if request.user.is_authenticated:
        smt = SMT.objects.get(id=pk)
        smt.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_smt(request, pk):
    if request.user.is_authenticated:
        smt = SMT.objects.get(id=pk)
        form = AddSMTForm(request.POST or None, instance=smt)
        if form.is_valid():
            form.save()
            messages.success(request, "Management updated...")
            return redirect('home')
        return render(request, 'update_smt.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_smt(request):  
    if request.method == 'POST':  
        form = AddSMTForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            return render(request, 'add_smt.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddSMTForm()  
    return render(request, 'add_smt.html', {'form': form})


    #ab
    

def add_academic_board(request):
    form = AddAcademicBoardForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_academic_board.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def academic_board(request):
    if request.user.is_authenticated:
        academic_board = AcademicBoard.objects.all()
        return render(request, 'academic_board.html', {'academic_board': academic_board})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_academic_board(request, pk):
    if request.user.is_authenticated:
        academicboard = AcademicBoard.objects.get(id=pk)
        return render(request, 'view_academic_board.html', {'academicboard':academicboard})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_academic_board(request, pk):
    if request.user.is_authenticated:
        academicboard = AcademicBoard.objects.get(id=pk)
        academicboard.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_academic_board(request, pk):
    if request.user.is_authenticated:
        academicboard = AcademicBoard.objects.get(id=pk)
        form = AddAcademicBoardForm(request.POST or None, instance=academicboard)
        if form.is_valid():
            form.save()
            messages.success(request, "Management updated...")
            return redirect('home')
        return render(request, 'update_academic_board.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_academic_board(request):  
    if request.method == 'POST':  
        form = AddAcademicBoardForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            return render(request, 'add_academic_board.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddAcademicBoardForm()  
    return render(request, 'add_academic_board.html', {'form': form})


    #Deans comm
    
def add_deans_committee(request):
    form = AddDeansCommitteeForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_deans_committee.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def deans_committee(request):
    if request.user.is_authenticated:
        deans_committee = DeansCommittee.objects.all()
        return render(request, 'deans_committee.html', {'deans_committee': deans_committee})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_deans_committee(request, pk):
    if request.user.is_authenticated:
        deanscommittee = DeansCommittee.objects.get(id=pk)
        return render(request, 'view_deans_committee.html', {'deanscommittee':deanscommittee})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_deans_committee(request, pk):
    if request.user.is_authenticated:
        deanscommittee = DeansCommittee.objects.get(id=pk)
        deanscommittee.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_deans_committee(request, pk):
    if request.user.is_authenticated:
        deanscommittee = DeansCommittee.objects.get(id=pk)
        form = AddDeansCommitteeForm(request.POST or None, instance=deanscommittee)
        if form.is_valid():
            form.save()
            messages.success(request, "committee updated...")
            return redirect('home')
        return render(request, 'update_deans_committee.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_deans_committee(request):  
    if request.method == 'POST':  
        form = AddDeansCommitteeForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            return render(request, 'add_deans_committee.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddDeansCommitteeForm()  
    return render(request, 'add_deans_committee.html', {'form': form})


    #CCM

        
def add_curriculum_committee(request):
    form = AddCurriculumCommitteeForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_curriculum_committee.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def curriculum_committee(request):
    if request.user.is_authenticated:
        deans_committee = DeansCommittee.objects.all()
        return render(request, 'curriculum_committee.html', {'curriculum_committee': curriculum_committee})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_curriculum_committee(request, pk):
    if request.user.is_authenticated:
        curriculumcommittee = CurriculumCommittee.objects.get(id=pk)
        return render(request, 'view_curriculum_committee.html', {'curriculumcommittee':curriculumcommittee})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_curriculum_committee(request, pk):
    if request.user.is_authenticated:
        curriculumcommittee = CurriculumCommittee.objects.get(id=pk)
        curriculumcommittee.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_curriculum_committee(request, pk):
    if request.user.is_authenticated:
        curriculumcommittee = CurriculumCommittee.objects.get(id=pk)
        form = AddCurriculumCommitteeForm(request.POST or None, instance=curriculumcommittee)
        if form.is_valid():
            form.save()
            messages.success(request, "committee updated...")
            return redirect('home')
        return render(request, 'update_curriculum_committee.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_curriculum_committee(request):  
    if request.method == 'POST':  
        form = AddCurriculumCommitteeForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            return render(request, 'add_curriculum_committee.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddCurriculumCommitteeForm()  
    return render(request, 'add_curriculum_committee.html', {'form': form})

#hrmd
       
def add_hrmd_committee(request):
    form = AddHRMDForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_hrmd_committee.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def hrmd_committee(request):
    if request.user.is_authenticated:
        hrmd_committee = HRMD.objects.all()
        return render(request, 'hrmd_committee.html', {'hrmd_committee': hrmd_committee})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_hrmd_committee(request, pk):
    if request.user.is_authenticated:
        HRMD = HRMD.objects.get(id=pk)
        return render(request, 'view_hrmd_committee.html', {'hrmd':hrmd})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_hrmd_committee(request, pk):
    if request.user.is_authenticated:
        hrmd = HRMD.objects.get(id=pk)
        hrmd.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_hrmd_committee(request, pk):
    if request.user.is_authenticated:
        hrmd = HRMD.objects.get(id=pk)
        form = AddHRMDForm(request.POST or None, instance=hrmd)
        if form.is_valid():
            form.save()
            messages.success(request, "committee updated...")
            return redirect('home')
        return render(request, 'update_hrmd_committee.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_hrmd_committee(request):  
    if request.method == 'POST':  
        form = AddHRMDForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            return render(request, 'add_hrmd_committee.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddHRMDForm()  
    return render(request, 'add_hrmd_committee.html', {'form': form})


#gaztte
def add_gazette_doc(request):
    form = AddGazetteForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Member added...")
                return redirect('home')
        return render(request, 'add_gazette_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def gazette_doc(request):
    if request.user.is_authenticated:
        gazette_doc = Gazette.objects.all()
        return render(request, 'gazette_doc.html', {'gazette_doc': gazette_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_gazette_doc(request, pk):
    if request.user.is_authenticated:
        gazette = Gazette.objects.get(id=pk)
        return render(request, 'view_gazette_doc.html', {'gazette':gazette})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_gazette_doc(request, pk):
    if request.user.is_authenticated:
        gazette = Gazette.objects.get(id=pk)
        gazette.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_gazette_doc(request, pk):
    if request.user.is_authenticated:
        gazette = Gazette.objects.get(id=pk)
        form = AddGazetteForm(request.POST or None, instance=gazette)
        if form.is_valid():
            form.save()
            messages.success(request, "File updated...")
            return redirect('home')
        return render(request, 'update_gazette_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_gazette_doc(request):  
    if request.method == 'POST':  
        form = AddGazetteForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            pdf_object = form.instance
            return render(request, 'add_gazette_doc.html', {'form': form, 'img_obj': img_object, 'pdf_obj' : pdf_object})  
    else:  
        form = AddGazetteForm()  
    return render(request, 'add_gazette_doc.html', {'form': form})

#news
def add_news_doc(request):
    form = AddNewsForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "News added...")
                return redirect('home')
        return render(request, 'add_news_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def news_doc(request):
    if request.user.is_authenticated:
        news_doc = News.objects.all()
        return render(request, 'news_doc.html', {'news_doc': news_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_news_doc(request, pk):
    if request.user.is_authenticated:
        news = News.objects.get(id=pk)
        return render(request, 'view_news_doc.html', {'news':news})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_news_doc(request, pk):
    if request.user.is_authenticated:
        news = News.objects.get(id=pk)
        news.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_news_doc(request, pk):
    if request.user.is_authenticated:
        news = News.objects.get(id=pk)
        form = AddNewsForm(request.POST or None, instance=news)
        if form.is_valid():
            form.save()
            messages.success(request, "News updated...")
            return redirect('home')
        return render(request, 'update_news_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def add_news_doc(request):  
    if request.method == 'POST':  
        form = AddNewsForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
           
            return render(request, 'add_news_doc.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddNewsForm()  
    return render(request, 'add_news_doc.html', {'form': form})

#adhaahama

def add_adhaahama_doc(request):
    form = AddAdhaahamaForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Adhaahama added...")
                return redirect('home')
        return render(request, 'add_adhaahama_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def adhaahama_doc(request):
    if request.user.is_authenticated:
        gazette_doc = Gazette.objects.all()
        return render(request, 'adhaahama_doc.html', {'adhaahama_doc': adhaahama_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_adhaahama_doc(request, pk):
    if request.user.is_authenticated:
        adhaahama = Adhaahama.objects.get(id=pk)
        return render(request, 'view_adhaahama_doc.html', {'adhaahama':adhaahama})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_adhaahama_doc(request, pk):
    if request.user.is_authenticated:
        adhaahama = Adhaahama.objects.get(id=pk)
        adhaahama.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_adhaahama_doc(request, pk):
    if request.user.is_authenticated:
        adhaahama = Adhaahama.objects.get(id=pk)
        form = AddAdhaahamaForm(request.POST or None, instance=adhaahama)
        if form.is_valid():
            form.save()
            messages.success(request, "Adhaahama updated...")
            return redirect('home')
        return render(request, 'update_adhaahama_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_adhaahama_doc(request):  
    if request.method == 'POST':  
        form = AddAdhaahamaForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            pdf_object = form.instance
            return render(request, 'add_adhaahama_doc.html', {'form': form, 'img_obj': img_object, 'pdf_obj' : pdf_object})  
    else:  
        form = AddAdhaahamaForm()  
    return render(request, 'add_adhaahama_doc.html', {'form': form})


#manhaj
def add_manhaj_doc(request):
    form = AddManhajForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Manhaj added...")
                return redirect('home')
        return render(request, 'add_manhaj_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def manhaj_doc(request):
    if request.user.is_authenticated:
        manhaj_doc = Manhaj.objects.all()
        return render(request, 'manhaj_doc.html', {'manhaj_doc': manhaj_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_manhaj_doc(request, pk):
    if request.user.is_authenticated:
        manhaj = Manhaj.objects.get(id=pk)
        return render(request, 'view_manhaj_doc.html', {'manhaj':manhaj})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_manhaj_doc(request, pk):
    if request.user.is_authenticated:
        manhaj = Manhaj.objects.get(id=pk)
        manhaj.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_manhaj_doc(request, pk):
    if request.user.is_authenticated:
        manhaj = Manhaj.objects.get(id=pk)
        form = AddManhajForm(request.POST or None, instance=manhaj)
        if form.is_valid():
            form.save()
            messages.success(request, "Manhaj updated...")
            return redirect('home')
        return render(request, 'update_manhaj_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_manhaj_doc(request):  
    if request.method == 'POST':  
        form = AddManhajForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            pdf_object = form.instance
            return render(request, 'add_manhaj_doc.html', {'form': form, 'img_obj': img_object, 'pdf_obj' : pdf_object})  
    else:  
        form = AddManhajForm()  
    return render(request, 'add_manhaj_doc.html', {'form': form})

#annualrprt

def add_annual_report_doc(request):
    form = AddAnnualReportForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Annual Report added...")
                return redirect('home')
        return render(request, 'add_annual_report_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def annual_report_doc(request):
    if request.user.is_authenticated:
        annual_report_doc = AnnualReport.objects.all()
        return render(request, 'annual_report_doc.html', {'annual_report_doc': annual_report_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_annual_report_doc(request, pk):
    if request.user.is_authenticated:
        annualreport = AnnualReport.objects.get(id=pk)
        return render(request, 'view_annual_report_doc.html', {'annualreport':annualreport})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_annual_report_doc(request, pk):
    if request.user.is_authenticated:
        annualreport = AnnualReport.objects.get(id=pk)
        annualreport.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_annual_report_doc(request, pk):
    if request.user.is_authenticated:
        annualreport = AnnualReport.objects.get(id=pk)
        form = AddAnnualReportForm(request.POST or None, instance=annualreport)
        if form.is_valid():
            form.save()
            messages.success(request, "Annual Report updated...")
            return redirect('home')
        return render(request, 'update_annual_report_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_annual_report_doc(request):  
    if request.method == 'POST':  
        form = AddAnnualReportForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            pdf_object = form.instance
            return render(request, 'add_annual_report_doc.html', {'form': form, 'img_obj': img_object, 'pdf_obj' : pdf_object})  
    else:  
        form = AddAnnualReportForm()  
    return render(request, 'add_annual_report_doc.html', {'form': form})

#rulesregs
def add_rules_regulations_doc(request):
    form = AddRulesRegulationsForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Rules and Regulations added...")
                return redirect('home')
        return render(request, 'add_rules_regulations_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def rules_regulations_doc(request):
    if request.user.is_authenticated:
        rules_regulations_doc = RulesRegulations.objects.all()
        return render(request, 'rules_regulations_doc.html', {'rules_regulations_doc': rules_regulations_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_rules_regulations_doc(request, pk):
    if request.user.is_authenticated:
        rulesregulations = RulesRegulations.objects.get(id=pk)
        return render(request, 'view_rules_regulations_doc.html', {'rulesregulations':rulesregulations})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_rules_regulations_doc(request, pk):
    if request.user.is_authenticated:
        rulesregulations = RulesRegulations.objects.get(id=pk)
        rulesregulations.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_rules_regulations_doc(request, pk):
    if request.user.is_authenticated:
        rulesregulations = RulesRegulations.objects.get(id=pk)
        form = AddRulesRegulationsForm(request.POST or None, instance=rulesregulations)
        if form.is_valid():
            form.save()
            messages.success(request, "Rules and Regulations updated...")
            return redirect('home')
        return render(request, 'update_rules_regulations_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_rules_regulations_doc(request):  
    if request.method == 'POST':  
        form = AddRulesRegulationsForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            pdf_object = form.instance
            return render(request, 'add_rules_regulations_doc.html', {'form': form, 'img_obj': img_object, 'pdf_obj' : pdf_object})  
    else:  
        form = AddRulesRegulationsForm()  
    return render(request, 'add_rules_regulations_doc.html', {'form': form})


#collabs
def add_collaborators_doc(request):
    form = AddCollaboratorsForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Collaborators added...")
                return redirect('home')
        return render(request, 'add_collaborators_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def collaborators_doc(request):
    if request.user.is_authenticated:
        collaborators_doc = Collaborators.objects.all()
        return render(request, 'collaborators_doc.html', {'collaborators_doc': collaborators_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_collaborators_doc(request, pk):
    if request.user.is_authenticated:
        collaborators = Collaborators.objects.get(id=pk)
        return render(request, 'view_collaborators_doc.html', {'collaborators':collaborators})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_collaborators_doc(request, pk):
    if request.user.is_authenticated:
        collaborators = Collaborators.objects.get(id=pk)
        collaborators.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_collaborators_doc(request, pk):
    if request.user.is_authenticated:
        collaborators = Collaborators.objects.get(id=pk)
        form = AddCollaboratorsForm(request.POST or None, instance=collaborators)
        if form.is_valid():
            form.save()
            messages.success(request, "Collaborators updated...")
            return redirect('home')
        return render(request, 'update_collaborators_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_collaborators_doc(request):  
    if request.method == 'POST':  
        form = AddCollaboratorsForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            
            return render(request, 'add_collaborators_doc.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddCollaboratorsForm()  
    return render(request, 'add_collaborators_doc.html', {'form': form})


#contact

def add_contact_us_doc(request):
    form = AddContactUsForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Contact added...")
                return redirect('home')
        return render(request, 'add_contact_us_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def contact_us_doc(request):
    if request.user.is_authenticated:
        contact_us_doc = ContactUs.objects.all()
        return render(request, 'contact_us_doc.html', {'contact_us_doc': contact_us_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_contact_us_doc(request, pk):
    if request.user.is_authenticated:
        contactus = ContactUs.objects.get(id=pk)
        return render(request, 'view_contact_us_doc.html', {'contactus':contactus})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_contact_us_doc(request, pk):
    if request.user.is_authenticated:
        contactus = ContactUs.objects.get(id=pk)
        contactus.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_contact_us_doc(request, pk):
    if request.user.is_authenticated:
        contactus = ContactUs.objects.get(id=pk)
        form = AddContactUsForm(request.POST or None, instance=contactus)
        if form.is_valid():
            form.save()
            messages.success(request, "Contact updated...")
            return redirect('home')
        return render(request, 'update_contact_us_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_contact_us_doc(request):  
    if request.method == 'POST':  
        form = AddContactUsForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 
            
            return render(request, 'add_contact_us_doc.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddContactUsForm()  
    return render(request, 'add_contact_us_doc.html', {'form': form})


#convocation
def add_convocation_doc(request):
    form = AddConvocationForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "Student added...")
                return redirect('home')
        return render(request, 'add_convocation_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def convocation_doc(request):
    if request.user.is_authenticated:
        convocation_doc = Convocation.objects.all()
        return render(request, 'convocation_doc.html', {'convocation_doc': convocation_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_convocation_doc(request, pk):
    if request.user.is_authenticated:
        convocation = Convocation.objects.get(id=pk)
        return render(request, 'view_convocation_doc.html', {'convocation':convocation})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_convocation_doc(request, pk):
    if request.user.is_authenticated:
        convocation = Convocation.objects.get(id=pk)
        convocation.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_convocation_doc(request, pk):
    if request.user.is_authenticated:
        convocation = Convocation.objects.get(id=pk)
        form = AddConvocationForm(request.POST or None, instance=contactus)
        if form.is_valid():
            form.save()
            messages.success(request, "Student updated...")
            return redirect('home')
        return render(request, 'update_convocation_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_convocation_doc(request):  
    if request.method == 'POST':  
        form = AddConvocationForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 

            return render(request, 'add_convocation_doc.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddConvocationForm()  
    return render(request, 'add_convocation_doc.html', {'form': form})


#history


def add_history_doc(request):
    form = AddHistoryForm(request.POST or None)
    if request.user.is_authenticated:
        if request.method =='POST':
            if form.is_valid():
                form.save()
                messages.success(request, "History added...")
                return redirect('home')
        return render(request, 'add_history_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def history_doc(request):
    if request.user.is_authenticated:
        history_doc = History.objects.all()
        return render(request, 'history_doc.html', {'history_doc': history_doc})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')

def view_history_doc(request, pk):
    if request.user.is_authenticated:
        history = History.objects.get(id=pk)
        return render(request, 'view_history_doc.html', {'history':history})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def delete_history_doc(request, pk):
    if request.user.is_authenticated:
        history = History.objects.get(id=pk)
        history.delete()
        messages.success(request, 'Record deleted successfully...')
        return redirect('home')
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def update_history_doc(request, pk):
    if request.user.is_authenticated:
        history = History.objects.get(id=pk)
        form = AddHistoryForm(request.POST or None, instance=contactus)
        if form.is_valid():
            form.save()
            messages.success(request, "History updated...")
            return redirect('home')
        return render(request, 'update_history_doc.html', {'form': form})
    else:
        messages.error(request, 'You must be logged in for that action...')
        return redirect('home')


def add_history_doc(request):  
    if request.method == 'POST':  
        form = AddHistoryForm(request.POST, request.FILES)  
        if form.is_valid():  
            form.save()  
            # Getting the current instance object to display in the template  
            img_object = form.instance 

            return render(request, 'add_history_doc.html', {'form': form, 'img_obj': img_object})  
    else:  
        form = AddHistoryForm()  
    return render(request, 'add_history_doc.html', {'form': form})