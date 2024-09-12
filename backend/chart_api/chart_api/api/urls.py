from django.urls import include, path

from chart_api.charts.api.views import candlestick_data

urlpatterns = [
    # Include the API routes
    path("api/", include("charts.api.urls")),
    path("api/candlestick-data/", candlestick_data),
]
