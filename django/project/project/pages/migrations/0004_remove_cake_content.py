# Generated by Django 4.2.1 on 2023-05-19 03:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0003_rename_cakes_cake'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cake',
            name='content',
        ),
    ]
