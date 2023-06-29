from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from .models import User
import jwt, datetime
from rest_framework import exceptions



# Create your views here.


class RegisterView(APIView):
    def post (self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email= request.data["email"]
        password= request.data["password"]

        user = User.objects.filter(email=email).first()

        if user is None:
            raise exceptions.AuthenticationFailed("User not found!")

        if not user.check_password(password):
            raise exceptions.AuthenticationFailed("Incorrect password")

        payload = {
            "id": user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=60),
            "iat": datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response({
            "jwt": token
        })
        response.set_cookie(key='jwt', value=token, httponly=True)

        return response

class UserView(APIView):
    
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise exceptions.AuthenticationFailed("Unauthenticated!")

        payload = jwt.decode(token, "secret", algorithms=["HS256"])

        try:
            payload = jwt.decode(token, "secret", algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise exceptions.AuthenticationFailed("Unauthenticated!")


        user = User.objects.filter(id = payload["id"]).first()
        serializer = UserSerializer(user)

        response =  Response(serializer.data)
        response['Access-Control-Allow-Origin'] = 'http://127.0.0.1:5173'


        return response

class LogoutView(APIView):
    def get(self, request):
        response = Response()
        response.delete_cookie("jwt")
        response.data = {
            "message": "succes"
        }
        return response
