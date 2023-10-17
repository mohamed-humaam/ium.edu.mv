# Generated by Django 4.2.5 on 2023-10-04 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0002_alter_section_table'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dean',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=50)),
                ('departmant', models.CharField(max_length=50)),
                ('telephone', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=100)),
                ('website', models.CharField(max_length=100)),
                ('message', models.CharField(max_length=3000)),
                ('image_link', models.CharField(max_length=200)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'dean',
            },
        ),
    ]
