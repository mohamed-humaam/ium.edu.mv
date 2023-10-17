from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('logout/', views.logout_user, name='logout'),
    path('signup/', views.signup_user, name='signup'),
    path('sections/', views.sections, name='sections'),
    path('view_section/<int:pk>', views.view_section, name='view_section'),
    path('delete_section/<int:pk>', views.delete_section, name='delete_section'),
    path('add_section/', views.add_section, name='add_section'),
    path('update_section/<int:pk>', views.update_section, name='update_section'),
    path('deans_list/', views.deans_list, name='deans_list'),
    path('view_dean/<int:pk>', views.view_dean, name='view_dean'),
    path('delete_dean/<int:pk>', views.delete_dean, name='delete_dean'),
    path('add_dean/', views.add_dean, name='add_dean'),
    path('update_dean/<int:pk>', views.update_dean, name='update_dean'),
    path('staff_list/', views.staff_list, name='staff_list'),
    path('view_staff/<int:pk>', views.view_staff, name='view_staff'),
    path('delete_staff/<int:pk>', views.delete_staff, name='delete_staff'),
    path('add_staff/', views.add_staff, name='add_staff'),
    path('update_staff/<int:pk>', views.update_staff, name='update_staff'),
    path('program_list/', views.program_list, name='program_list'),
    path('view_program/<int:pk>', views.view_program, name='view_program'),
    path('delete_program/<int:pk>', views.delete_program, name='delete_program'),
    path('add_program/', views.add_program, name='add_program'),
    path('update_program/<int:pk>', views.update_program, name='update_program'),
]
