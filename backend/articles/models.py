from django.db import models
from datetime import datetime
# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    author = models.CharField(max_length=50)
    created_at = models.DateTimeField()
    image = models.TextField()

    def __str__(self):
        return self.title
