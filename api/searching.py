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
                    lines = f.readlines()
                    found = False
                    matches = []
                    for line in lines:
                        if query in line:
                            found = True
                            matches.append(line)
                    if found:
                        results.append([filepath, matches])
            except:
                try:
                    a = r"\\?\""
                    with open(a[:-1] + filepath, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        found = False
                        matches = []
                        for line in lines:
                            if query in line:
                                found = True
                                matches.append(line)
                        if found:
                            results.append([filepath, matches])
                except:
                    pass
print(results)