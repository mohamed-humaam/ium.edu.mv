# Generated by Django 4.2.5 on 2023-10-04 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('message', models.CharField(max_length=3000)),
                ('overview', models.CharField(max_length=3000)),
                ('vision', models.CharField(max_length=1000)),
                ('objective', models.CharField(max_length=1000)),
                ('mission', models.CharField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
