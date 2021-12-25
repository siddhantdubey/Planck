import os
import sys
import glob

results = []

for subdir, dirs, files in os.walk(r'\\?\C:\Users\siddh\Documents\Projects\Planck\api\data'):
    for filename in files:
        filepath = subdir + os.sep + filename

        if filepath.endswith(".md") or filepath.endswith(".png"):
            query = "Polymorphism"
            try:
                with open(filepath, 'r') as f:
                    if query in f.read():
                        print(filepath)
            except:
                try:
                    a = r"\\?\""
                    with open(a[:-1] + filepath, 'r', encoding='utf-8') as f:
                        if query in f.read():
                            print(filepath)
                except:
                    pass