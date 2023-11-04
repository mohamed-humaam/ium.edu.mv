# Generated by Django 3.2.20 on 2023-10-22 17:12

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0005_program_departmant'),
    ]

    operations = [
        migrations.CreateModel(
            name='TopManagement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('designation', models.CharField(max_length=50)),
                ('position', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='images/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'topmanagement',
            },
        ),
        migrations.AlterField(
            model_name='dean',
            name='message',
            field=models.CharField(max_length=300, validators=[django.core.validators.MinLengthValidator(10)], verbose_name='Message Length'),
        ),
    ]
