import os
import site

# Add the mozamb dir to the python path.
wsgidir = os.path.dirname(__file__)
site.addsitedir(os.path.abspath(os.path.join(wsgidir, '../')))

os.environ['DJANGO_SETTINGS_MODULE'] = 'mozamb.settings_local'

import django.core.handlers.wsgi

# This is what mod_wsgi runs.
application = django.core.handlers.wsgi.WSGIHandler()
