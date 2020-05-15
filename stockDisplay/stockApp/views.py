from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from stockApp.models import Stock


# Create your views here.

def home(reque):
    shelf = Stock.objects.all()
    return render(reque, 'index.html', {'shelf': shelf})


def show(reque):
    shelf = Stock.objects.all()
    return render(reque, 'display.html', {'shelf': shelf})


class InsertProduct(TemplateView):
    def get(self, request, *args, **kwargs):
        product = request.GET['product']
        quantity = request.GET['quantity']
        s = Stock(sname=product, quant=quantity)
        s.save()
        return redirect('index')


class UpdateStock(TemplateView):
    def get(self, request, *args, **kwargs):
        stockid = request.GET['stockid']
        quantity = request.GET['st']
        if request.GET.get('add'):
            value = Stock.objects.get(sid=stockid)
            value.quant = value.quant + int(quantity)
            value.save()

        if request.GET.get('remove'):
            value = Stock.objects.get(sid=stockid)
            value.quant = value.quant - int(quantity)
            if value.quant >= 0:
                value.save()
            else:
                print("Not enough Stock")

        return redirect('index')
