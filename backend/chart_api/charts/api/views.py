# charts/api/views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse


@api_view(["GET"])
def line_chart_data(request):
    data = [
        {"date": "2024-04-01", "desktop": 222, "mobile": 150},
        {"date": "2024-04-02", "desktop": 97, "mobile": 180},
        {"date": "2024-04-03", "desktop": 167, "mobile": 120},
        {"date": "2024-04-04", "desktop": 242, "mobile": 260},
        {"date": "2024-04-05", "desktop": 373, "mobile": 290},
        {"date": "2024-04-06", "desktop": 301, "mobile": 340},
        {"date": "2024-04-07", "desktop": 245, "mobile": 180},
        {"date": "2024-04-08", "desktop": 409, "mobile": 320},
        {"date": "2024-04-09", "desktop": 59, "mobile": 110},
        {"date": "2024-04-10", "desktop": 261, "mobile": 190},
        {"date": "2024-04-11", "desktop": 327, "mobile": 350},
        {"date": "2024-04-12", "desktop": 292, "mobile": 210},
        {"date": "2024-04-13", "desktop": 342, "mobile": 380},
        {"date": "2024-04-14", "desktop": 137, "mobile": 220},
        {"date": "2024-04-15", "desktop": 120, "mobile": 170},
        {"date": "2024-04-16", "desktop": 138, "mobile": 190},
        {"date": "2024-04-17", "desktop": 446, "mobile": 360},
        {"date": "2024-04-18", "desktop": 364, "mobile": 410},
        {"date": "2024-04-19", "desktop": 243, "mobile": 180},
        {"date": "2024-04-20", "desktop": 89, "mobile": 150},
        {"date": "2024-04-21", "desktop": 137, "mobile": 200},
        {"date": "2024-04-22", "desktop": 224, "mobile": 170},
        {"date": "2024-04-23", "desktop": 138, "mobile": 230},
        {"date": "2024-04-24", "desktop": 387, "mobile": 290},
        {"date": "2024-04-25", "desktop": 215, "mobile": 250},
        {"date": "2024-04-26", "desktop": 75, "mobile": 130},
        {"date": "2024-04-27", "desktop": 383, "mobile": 420},
        {"date": "2024-04-28", "desktop": 122, "mobile": 180},
        {"date": "2024-04-29", "desktop": 315, "mobile": 240},
        {"date": "2024-04-30", "desktop": 454, "mobile": 380},
        {"date": "2024-05-01", "desktop": 165, "mobile": 220},
        {"date": "2024-05-02", "desktop": 293, "mobile": 310},
        {"date": "2024-05-03", "desktop": 247, "mobile": 190},
        {"date": "2024-05-04", "desktop": 385, "mobile": 420},
        {"date": "2024-05-05", "desktop": 481, "mobile": 390},
        {"date": "2024-05-06", "desktop": 498, "mobile": 520},
        {"date": "2024-05-07", "desktop": 388, "mobile": 300},
        {"date": "2024-05-08", "desktop": 149, "mobile": 210},
        {"date": "2024-05-09", "desktop": 227, "mobile": 180},
        {"date": "2024-05-10", "desktop": 293, "mobile": 330},
        {"date": "2024-05-11", "desktop": 335, "mobile": 270},
        {"date": "2024-05-12", "desktop": 197, "mobile": 240},
        {"date": "2024-05-13", "desktop": 197, "mobile": 160},
        {"date": "2024-05-14", "desktop": 448, "mobile": 490},
        {"date": "2024-05-15", "desktop": 473, "mobile": 380},
        {"date": "2024-05-16", "desktop": 338, "mobile": 400},
        {"date": "2024-05-17", "desktop": 499, "mobile": 420},
        {"date": "2024-05-18", "desktop": 315, "mobile": 350},
        {"date": "2024-05-19", "desktop": 235, "mobile": 180},
        {"date": "2024-05-20", "desktop": 177, "mobile": 230},
        {"date": "2024-05-21", "desktop": 82, "mobile": 140},
        {"date": "2024-05-22", "desktop": 81, "mobile": 120},
        {"date": "2024-05-23", "desktop": 252, "mobile": 290},
        {"date": "2024-05-24", "desktop": 294, "mobile": 220},
        {"date": "2024-05-25", "desktop": 201, "mobile": 250},
        {"date": "2024-05-26", "desktop": 213, "mobile": 170},
        {"date": "2024-05-27", "desktop": 420, "mobile": 460},
        {"date": "2024-05-28", "desktop": 233, "mobile": 190},
        {"date": "2024-05-29", "desktop": 78, "mobile": 130},
        {"date": "2024-05-30", "desktop": 340, "mobile": 280},
        {"date": "2024-05-31", "desktop": 178, "mobile": 230},
    ]
    return JsonResponse(data, safe=False)


@api_view(["GET"])
def bar_chart_data(request):
    data = [
        {"browser": "chrome", "visitors": 275},
        {"browser": "safari", "visitors": 200},
        {"browser": "firefox", "visitors": 187},
        {"browser": "edge", "visitors": 173},
        {"browser": "other", "visitors": 90},
    ]
    return JsonResponse(data, safe=False)


@api_view(["GET"])
def sidebar_chart_data(request):
    data = [
        {"month": "January", "desktop": 186},
        {"month": "February", "desktop": 305},
        {"month": "March", "desktop": 237},
        {"month": "April", "desktop": 73},
        {"month": "May", "desktop": 209},
        {"month": "June", "desktop": 214},
    ]
    return JsonResponse(data, safe=False)


def candlestick_data(request):
    data = [
        ["Day", "", "", "", ""],
        ["Mon", 20, 28, 38, 45],
        ["Tue", 31, 38, 55, 66],
        ["Wed", 50, 55, 77, 80],
        ["Thu", 77, 77, 66, 50],
        ["Fri", 68, 66, 22, 15],
    ]
    return JsonResponse(data, safe=False)


@api_view(["GET"])
def pie_chart_data(request):
    data = [
        {"browser": "chrome", "visitors": 275, "fill": "var(--color-chrome)"},
        {"browser": "safari", "visitors": 200, "fill": "var(--color-safari)"},
        {"browser": "firefox", "visitors": 187, "fill": "var(--color-firefox)"},
        {"browser": "edge", "visitors": 173, "fill": "var(--color-edge)"},
        {"browser": "other", "visitors": 90, "fill": "var(--color-other)"},
    ]
    return Response(data)
