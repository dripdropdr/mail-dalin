from django.db import models

# Create your models here.
class Mdata(models.Model):
    title = models.CharField(verbose_name = "mail_title", max_length = 200)

    def __str__(self):
        return self.title