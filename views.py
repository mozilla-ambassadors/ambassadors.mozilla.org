from django.shortcuts import render_to_response
from django.http import HttpResponseRedirect, Http404

def addons_view(request):
    return render_to_response('addons/index.html')

def addons_rootpg_view(request, page_name):
    return render_to_response('addons/' + page_name + '.html', {'page_name': page_name})

def addons_redirect(request, qryStr, path):
    return HttpResponseRedirect('/addons/' + path + qryStr)
