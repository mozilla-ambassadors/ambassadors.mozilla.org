from django.shortcuts import render_to_response

def addons_view(request):
    return render_to_response('addons/index.html')

def addons_rootpg_view(request, page_name):
    return render_to_response('addons/' + page_name + '.html')
