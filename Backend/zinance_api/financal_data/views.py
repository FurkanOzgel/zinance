from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions
import subprocess
import os.path
import json


class PriceOfView(APIView):
    def get(self, request, instrument):

        script_path = os.path.dirname(os.path.abspath(__file__)) + "/node_script/getPrice.js"
        price_data = subprocess.run(["node", script_path, instrument], capture_output=True, text=True)

        price_data = price_data.stdout.replace("\n", "")
        
        return Response(price_data)

