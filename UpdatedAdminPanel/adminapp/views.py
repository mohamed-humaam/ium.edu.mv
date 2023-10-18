from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from .forms import SignUpForm, AddSectionForm, AddDeanForm, AddStaffForm, AddProgramForm
from .models import Section, Dean, Staff, Program

# Create your views here.
def home(request):
    sections = Section.objects.all().count()
    deans = Dean.objects.all().count()
    staff = Staff.objects.all().count()
    programs = Program.objects.all().count()

    counts = {'sections': sections, 'deans': deans, 'staff': staff, 'programs': programs}

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
