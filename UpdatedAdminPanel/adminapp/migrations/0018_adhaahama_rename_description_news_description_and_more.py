# Generated by Django 4.2.5 on 2023-10-27 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0017_news'),
    ]

    operations = [
        migrations.CreateModel(
            name='Adhaahama',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('year', models.CharField(max_length=50)),
                ('attachment', models.FileField(upload_to='files')),
                ('image', models.ImageField(upload_to='images')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'adhaahama_doc',
            },
        ),
        migrations.RenameField(
            model_name='news',
            old_name='Description',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='news',
            old_name='Title',
            new_name='title',
        ),
    ]
