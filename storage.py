from django.core.files.storage import FileSystemStorage 
import os

class OverwriteStorage(FileSystemStorage):
    def get_available_name(self, name):
        if os.path.exists(self.path(name)):
            os.remove(self.path(name))
        return name
