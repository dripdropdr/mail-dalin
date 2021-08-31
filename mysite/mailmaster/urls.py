from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = "tutorials"),
    path('2/', views.form1, name = "datarequest"),
    path('3/', views.form2, name = "quotationrequest"),
    path('4/', views.form22, name = "sub"),
    path('1/', views.form0, name = "report"),
    path('feedback/', views.feedbacks, name = "feedback"),
]