# Generated by Django 4.2.5 on 2023-10-28 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminapp', '0024_rename_departmant_contactus_department'),
    ]

    operations = [
        migrations.CreateModel(
            name='Convocation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('batch', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'db_table': 'convocation_doc',
            },
        ),
    ]
