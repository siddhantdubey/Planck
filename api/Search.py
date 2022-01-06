import os
import sys
import glob
from flask_restful import Api, Resource, reqparse

class Search(Resource):
    def get(self):
        return {
            'resultStatus': 'SUCCESS',
            'message': "Hello Api Handler"
        }
    
    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('query', type=str, required = True, help = 'No task title provided', location = 'json')
        args = parser.parse_args()
        results = []
        for subdir, dirs, files in os.walk(r'\\?\C:\Users\siddh\Documents\Projects\Planck\api\data'):
            for filename in files:
                filepath = subdir + os.sep + filename
                if filepath.endswith(".md"):
                    query = args["query"].lower()
                    try:
                        with open(filepath, 'r') as f:
                            lines = f.readlines()
                            found = False
                            matches = []
                            for line in lines:
                                if query in line.lower():
                                    found = True
                                    matches.append(line)
                            total_text = "".join(lines)
                            if found:
                                results.append([filepath, matches, total_text, "local"])
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
                                total_text = "".join(lines)
                                if found:
                                    results.append([filepath, matches, total_text, "local"])
                        except:
                            pass
        return results
