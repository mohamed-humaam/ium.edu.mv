from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class Section(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=3000)
    overview = models.CharField(max_length=3000)
    vision = models.CharField(max_length=1000)
    objective = models.CharField(max_length=1000)
    mission = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name}")
    

    class Meta:
        db_table = 'section'


class Dean(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    departmant = models.CharField(max_length=50)
    telephone = models.CharField(max_length=20)
    email = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    message = models.CharField('Message Length', max_length=300, validators=[MinLengthValidator(10)])
    image_link = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")
    

    class Meta:
        db_table = 'dean'


class Staff(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=50)
    departmant = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    image_link = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")
    

    class Meta:
        db_table = 'staff'


class Program(models.Model):
    name = models.CharField(max_length=50)
    departmant = models.CharField(max_length=50)
    type = models.CharField(max_length=20)
    level = models.CharField(max_length=20)
    duration = models.CharField(max_length=20)
    medium = models.CharField(max_length=20)
    fee = models.CharField(max_length=20)
    center = models.CharField(max_length=50)
    link = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.type}")
    

    class Meta:
        db_table = 'program'
