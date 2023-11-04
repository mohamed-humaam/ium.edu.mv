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
    image_link = models.CharField(max_length=200)
    type = models.CharField(max_length=20)
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


class TopManagement(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")

    class Meta:
        db_table = 'topmanagement'

class SMT(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")

    class Meta:
        db_table = 'smt'

class AcademicBoard(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")

    class Meta:
        db_table = 'academic_board'

class DeansCommittee(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")

    class Meta:
        db_table = 'deans_committee'

class CurriculumCommittee(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")

    class Meta:
        db_table = 'curriculum_committee'


class HRMD(models.Model):
    name = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.position}")

    class Meta:
        db_table = 'hrmd_committee'


class Gazette(models.Model):
    name = models.CharField(max_length=50)
    number = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    date = models.DateField(max_length=30)
    attachment = models.FileField (upload_to='files')
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.number} - {self.category} - {self.date}" )

    class Meta:
        db_table = 'gazette_doc'

class News(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=10000)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.title} - {self.description} " )

    class Meta:
        db_table = 'news_doc'

class Adhaahama(models.Model):
    name = models.CharField(max_length=50)
    year = models.CharField(max_length=50)
    attachment = models.FileField (upload_to='files')
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.year}"  )

    class Meta:
        db_table = 'adhaahama_doc'

class Manhaj(models.Model):
    name = models.CharField(max_length=50)
    year = models.CharField(max_length=50)
    attachment = models.FileField (upload_to='files')
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.year}"  )

    class Meta:
        db_table = 'manhaj_doc'


class AnnualReport(models.Model):
    name = models.CharField(max_length=50)
    year = models.CharField(max_length=50)
    attachment = models.FileField (upload_to='files')
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.name} - {self.year}"  )

    class Meta:
        db_table = 'annual_report_doc'

class RulesRegulations(models.Model):
    title = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    attachment = models.FileField (upload_to='files')
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.title} - {self.category} -{self.type} " )

    class Meta:
        db_table = 'rules_regulations_doc'
    

class Collaborators(models.Model):
    institution = models.CharField(max_length=50)
    signed = models.CharField(max_length=50)
    expires = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.institution} - {self.signed} -{self.expires} " )

    class Meta:
        db_table = 'collaborators_doc'

class ContactUs(models.Model):
    department = models.CharField(max_length=50)
    code = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.departmant} - {self.code} -{self.email} " )

    class Meta:
        db_table = 'contact_us_doc'

class Convocation(models.Model):
    year = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    batch = models.CharField(max_length=50)
   # image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.year} - {self.name} -{self.batch} " )

    class Meta:
        db_table = 'convocation_doc'


class History(models.Model):
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return (f"{self.title} - {self.content}  " )

    class Meta:
        db_table = 'history_doc'