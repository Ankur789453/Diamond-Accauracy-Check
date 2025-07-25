from rest_framework import serializers
from .models import Dimaond


class DiamondSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dimaond
        fields = '__all__'
