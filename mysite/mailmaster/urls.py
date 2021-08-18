from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = "index"),
    path('1/', views.form1, name = "datarequest"),
    path('2/', views.form2, name = "quotationrequest"),
    path('tutorial/', views.tutorials, name = "tutorials"),
    path('feedback/', views.feedbacks, name = "feedback"),
]