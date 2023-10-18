# Generated by Django 4.2.5 on 2023-10-05 00:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0003_dean'),
    ]

    operations = [
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=20)),
                ('level', models.CharField(max_length=20)),
                ('duration', models.CharField(max_length=20)),
                ('medium', models.CharField(max_length=20)),
                ('fee', models.CharField(max_length=20)),
                ('center', models.CharField(max_length=50)),
                ('link', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'program',
            },
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=50)),
                ('departmant', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=20)),
                ('image_link', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'staff',
            },
        ),
    ]