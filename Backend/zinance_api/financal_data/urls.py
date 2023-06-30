from django.urls import path
from .views import PriceOfView

urlpatterns = [
    path("priceOf/<str:instrument>/", PriceOfView.as_view())
]