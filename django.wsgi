import os, sys
sys.path.append('/usr/local/www/pnwmoths/django')
os.environ['DJANGO_SETTINGS_MODULE'] = 'pnwinsects.app.settings'

import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()
