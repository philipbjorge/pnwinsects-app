from settings_global import *
# Set path for logging configuration file.
logging.config.fileConfig(os.path.join(PROJECT_ROOT, "logging-live.conf"))

#DEBUG = False 
DEBUG = True
TEMPLATE_DEBUG = DEBUG
#SEND_BROKEN_LINK_EMAILS = True

#Caching
CACHE_BACKEND = 'johnny.backends.locmem://'
# Make this unique, and don't share it with anybody.
SECRET_KEY = '8a29e6d071cff07b0b07847a8dfa02d6db82f45f'

CONTENT_ROOT = "/usr/local/www/images"

# Define local media root and url.
#
# Absolute path to the directory that holds media.
# Example: "/home/media/media.lawrence.com/"
MEDIA_ROOT = '/usr/local/www/pnwmoths/django/pnwmoths/static/media/'

# URL that handles the media served from MEDIA_ROOT. Make sure to use a
# trailing slash if there is a path component (optional in other cases).
# Examples: "http://media.lawrence.com", "http://example.com/media/"

MEDIA_URL = "http://dev.pnwmoths.biol.wwu.edu/media/"
