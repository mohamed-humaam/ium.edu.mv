from django.urls import path
from . import views
from django.conf import settings
from django.contrib import admin
from django.urls import path
from .views import add_top_management, add_smt, add_annual_report_doc, add_manhaj_doc, add_academic_board, add_deans_committee, add_curriculum_committee, add_hrmd_committee, add_gazette_doc, add_news_doc, add_adhaahama_doc, add_annual_report_doc, add_rules_regulations_doc, add_collaborators_doc, add_contact_us_doc, add_convocation_doc, add_history_doc
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SectionViewSet



router = DefaultRouter()
router.register(r'sections', SectionViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]

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
    path('view_top_management/<int:pk>', views.view_top_management, name='view_top_management'),
    path('delete_top_management/<int:pk>', views.delete_top_management, name='delete_top_management'),
    path('add_top_management/', views.add_top_management, name='add_top_management'),
    path('update_top_management/<int:pk>', views.update_top_management, name='update_top_management'),
    path('top_management/', views.top_management, name='top_management'),
    path('', add_top_management, name = "image-request"),
    path('view_smt/<int:pk>', views.view_smt, name='view_smt'),
    path('delete_smt/<int:pk>', views.delete_smt, name='delete_smt'),
    path('add_smt/', views.add_smt, name='add_smt'),
    path('update_smt/<int:pk>', views.update_smt, name='update_smt'),
    path('smt/', views.smt, name='smt'),
    path('', add_smt, name = "image-request"),
    path('view_academic_board/<int:pk>', views.view_academic_board, name='view_academic_board'),
    path('delete_academic_board/<int:pk>', views.delete_academic_board, name='delete_academic_board'),
    path('add_academic_board/', views.add_academic_board, name='add_academic_board'),
    path('update_academic_board/<int:pk>', views.update_academic_board, name='update_academic_board'),
    path('academic_board/', views.academic_board, name='academic_board'),
    path('', add_academic_board, name = "image-request"),

    path('view_deans_committee/<int:pk>', views.view_deans_committee, name='view_deans_committee'),
    path('delete_deans_committee/<int:pk>', views.delete_deans_committee, name='delete_deans_committee'),
    path('add_deans_committee/', views.add_deans_committee, name='add_deans_committee'),
    path('update_deans_committee/<int:pk>', views.update_deans_committee, name='update_deans_committee'),
    path('deans_committee/', views.deans_committee, name='deans_committee'),
    path('', add_deans_committee, name = "image-request"),

    path('view_curriculum_committee/<int:pk>', views.view_curriculum_committee, name='view_curriculum_committee'),
    path('delete_curriculum_committee/<int:pk>', views.delete_curriculum_committee, name='delete_curriculum_committee'),
    path('add_curriculum_committee/', views.add_curriculum_committee, name='add_curriculum_committee'),
    path('update_curriculum_committee/<int:pk>', views.update_curriculum_committee, name='update_curriculum_committee'),
    path('curriculum_committee/', views.curriculum_committee, name='curriculum_committee'),
    path('', add_curriculum_committee, name = "image-request"),

    path('view_hrmd_committee/<int:pk>', views.view_hrmd_committee, name='view_hrmd_committee'),
    path('delete_hrmd_committee/<int:pk>', views.delete_hrmd_committee, name='delete_hrmd_committee'),
    path('add_hrmd_committee/', views.add_hrmd_committee, name='add_hrmd_committee'),
    path('update_hrmd_committee/<int:pk>', views.update_hrmd_committee, name='update_hrmd_committee'),
    path('hrmd_committee/', views.hrmd_committee, name='hrmd_committee'),
    path('', add_hrmd_committee, name = "image-request"),

    path('view_gazette_doc/<int:pk>', views.view_gazette_doc, name='view_gazette_doc'),
    path('delete_gazette_doc/<int:pk>', views.delete_gazette_doc, name='delete_gazette_doc'),
    path('add_gazette_doc/', views.add_gazette_doc, name='add_gazette_doc'),
    path('update_gazette_doc/<int:pk>', views.update_gazette_doc, name='update_gazette_doc'),
    path('gazette_doc/', views.gazette_doc, name='gazette_doc'),
    path('', add_gazette_doc, name = "image-request"),
    path('', add_gazette_doc, name = "file-request"),
  
    path('view_news_doc/<int:pk>', views.view_news_doc, name='view_news_doc'),
    path('delete_news_doc/<int:pk>', views.delete_news_doc, name='delete_news_doc'),
    path('add_news_doc/', views.add_news_doc, name='add_news_doc'),
    path('update_news_doc/<int:pk>', views.update_news_doc, name='update_news_doc'),
    path('news_doc/', views.news_doc, name='news_doc'),
    path('', add_news_doc, name = "image-request"),

    path('view_adhaahama_doc/<int:pk>', views.view_adhaahama_doc, name='view_adhaahama_doc'),
    path('delete_adhaahama_doc/<int:pk>', views.delete_adhaahama_doc, name='delete_adhaahama_doc'),
    path('add_adhaahama_doc/', views.add_adhaahama_doc, name='add_adhaahama_doc'),
    path('update_adhaahama_doc/<int:pk>', views.update_adhaahama_doc, name='update_adhaahama_doc'),
    path('adhaahama_doc/', views.adhaahama_doc, name='adhaahama_doc'),
    path('', add_adhaahama_doc, name = "image-request"),
    path('', add_adhaahama_doc, name = "file-request"),

    path('view_manhaj_doc/<int:pk>', views.view_manhaj_doc, name='view_manhaj_doc'),
    path('delete_manhaj_doc/<int:pk>', views.delete_manhaj_doc, name='delete_manhaj_doc'),
    path('add_manhaj_doc/', views.add_manhaj_doc, name='add_manhaj_doc'),
    path('update_manhaj_doc/<int:pk>', views.update_manhaj_doc, name='update_manhaj_doc'),
    path('manhaj_doc/', views.manhaj_doc, name='manhaj_doc'),
    path('', add_manhaj_doc, name = "image-request"),
    path('', add_manhaj_doc, name = "file-request"),

    path('view_annual_report_doc/<int:pk>', views.view_annual_report_doc, name='view_annual_report_doc'),
    path('delete_annual_report_doc/<int:pk>', views.delete_annual_report_doc, name='delete_annual_report_doc'),
    path('add_annual_report_doc/', views.add_annual_report_doc, name='add_annual_report_doc'),
    path('update_annual_report_doc/<int:pk>', views.update_annual_report_doc, name='update_annual_report_doc'),
    path('annual_report_doc/', views.annual_report_doc, name='annual_report_doc'),
    path('', add_annual_report_doc, name = "image-request"),
    path('', add_annual_report_doc, name = "file-request"),

    path('view_rules_regulations_doc/<int:pk>', views.view_rules_regulations_doc, name='view_rules_regulations_doc'),
    path('delete_rules_regulations_doc/<int:pk>/', views.delete_rules_regulations_doc, name='delete_rules_regulations_doc'),
    path('add_rules_regulations_doc/', views.add_rules_regulations_doc, name='add_rules_regulations_doc'),
    path('update_rules_regulations_doc/<int:pk>', views.update_rules_regulations_doc, name='update_rules_regulations_doc'),
    path('rules_regulations_doc/', views.rules_regulations_doc, name='rules_regulations_doc'),
    path('', add_rules_regulations_doc, name = "image-request"),
    path('', add_rules_regulations_doc, name = "file-request"),

    path('view_collaborators_doc/<int:pk>', views.view_collaborators_doc, name='view_collaborators_doc'),
    path('delete_collaborators_doc/<int:pk>/', views.delete_collaborators_doc, name='delete_collaborators_doc'),
    path('add_collaborators_doc/', views.add_collaborators_doc, name='add_collaborators_doc'),
    path('update_collaborators_doc/<int:pk>', views.update_collaborators_doc, name='update_collaborators_doc'),
    path('collaborators_doc/', views.collaborators_doc, name='collaborators_doc'),
    path('', add_collaborators_doc, name = "image-request"),

    path('view_contact_us_doc/<int:pk>', views.view_contact_us_doc, name='view_contact_us_doc'),
    path('delete_contact_us_doc/<int:pk>/', views.delete_contact_us_doc, name='delete_contact_us_doc'),
    path('add_contact_us_doc/', views.add_contact_us_doc, name='add_contact_us_doc'),
    path('update_contact_us_doc/<int:pk>', views.update_contact_us_doc, name='update_contact_us_doc'),
    path('contact_us_doc/', views.contact_us_doc, name='contact_us_doc'),

    path('view_convocation_doc/<int:pk>', views.view_convocation_doc, name='view_convocation_doc'),
    path('delete_convocation_doc/<int:pk>/', views.delete_convocation_doc, name='delete_convocation_doc'),
    path('add_convocation_doc/', views.add_convocation_doc, name='add_convocation_doc'),
    path('update_convocation_doc/<int:pk>', views.update_convocation_doc, name='update_convocation_doc'),
    path('convocation_doc/', views.convocation_doc, name='convocation_doc'),
    path('', add_convocation_doc, name = "image-request"),

    path('view_history_doc/<int:pk>', views.view_history_doc, name='view_history_doc'),
    path('delete_history_doc/<int:pk>/', views.delete_history_doc, name='delete_history_doc'),
    path('add_history_doc/', views.add_history_doc, name='add_history_doc'),
    path('update_history_doc/<int:pk>', views.update_history_doc, name='update_history_doc'),
    path('history_doc/', views.history_doc, name='history_doc'),
    path('', add_history_doc, name = "image-request"),

   
   
   



    
  
   
]
