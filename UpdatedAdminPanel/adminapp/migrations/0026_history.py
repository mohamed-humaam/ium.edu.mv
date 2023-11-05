# Generated by Django 4.2.5 on 2023-10-28 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0025_convocation'),
    ]

    operations = [
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('content', models.CharField(max_length=50)),
                ('image', models.ImageField(upload_to='images')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'history_doc',
            },
        ),
    ]