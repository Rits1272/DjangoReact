# Generated by Django 2.2.3 on 2019-08-04 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0005_auto_20190804_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.TextField(),
        ),
    ]
