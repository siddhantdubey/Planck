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

