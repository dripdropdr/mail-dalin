from django.http import request
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, "index.html")

def form0(request):
    return render(request, "index3.html")

def form1(request):
    return render(request, "index1.html")

def form2(request):
    return render(request, "index2.html")

def form22(request):
    return render(request, "index2-2.html")

def feedbacks(request):
    return render(request, "index4.html")