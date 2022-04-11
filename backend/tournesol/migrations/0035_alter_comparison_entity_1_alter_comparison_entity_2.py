# Generated by Django 4.0.3 on 2022-04-10 11:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tournesol', '0034_poll_algorithm'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comparison',
            name='entity_1',
            field=models.ForeignKey(help_text='Left entity to compare', on_delete=django.db.models.deletion.CASCADE, related_name='comparisons_entity_1', to='tournesol.entity'),
        ),
        migrations.AlterField(
            model_name='comparison',
            name='entity_2',
            field=models.ForeignKey(help_text='Right entity to compare', on_delete=django.db.models.deletion.CASCADE, related_name='comparisons_entity_2', to='tournesol.entity'),
        ),
    ]
