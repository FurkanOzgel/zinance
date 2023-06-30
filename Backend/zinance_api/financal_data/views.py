from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import exceptions
import subprocess
import os.path
import json
import re
import re


class PriceOfView(APIView):
    def get(self, request, instrument):

        script_path = os.path.dirname(os.path.abspath(__file__)) + "/node_script/getPrice.js"
        price_data = subprocess.run(["node", script_path, instrument], capture_output=True, text=True)

        price_data = price_data.stdout.replace("\n", "").replace("'",'"')
        # İki nokta karakteri kullanılan yerleri tespit etmek için regex deseni
        pattern = r"\b(\w+)\s*:\s*"

        # İki nokta karakteri kullanılan yerleri bulma ve düzenleme
        price_data = re.sub(pattern, r'"\1":', price_data)

        

        price_data =json.loads(price_data)
        
        return Response(price_data)

