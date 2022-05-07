import os
import sys
import glob
import tweepy as tw
import os
from dotenv import load_dotenv
from flask_restful import Api, Resource, reqparse


load_dotenv()

consumer_key = os.environ.get('consumer_key')
consumer_secret = os.environ.get('consumer_secret')
access_token = os.environ.get('access_token')
access_token_secret = os.environ.get('access_token_secret')

auth = tw.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tw.API(auth)


class Search(Resource):
    def get(self):
        return {
            'resultStatus': 'SUCCESS',
            'message': "This is a useless request, use POST instead"
        }

    def post(self):
        print(self)
        parser = reqparse.RequestParser()
        parser.add_argument('query', type=str, required=True,
                            help='No task title provided', location='json')
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
                                results.append(
                                    [filepath, matches, total_text, "local"])
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
                                    results.append(
                                        [filepath, matches, total_text, "local"])
                        except:
                            pass
        tweet_search = args['query'] + " (from:@sidcodes)"
        try:
            tweets = tw.Cursor(api.search_tweets, q=tweet_search).items()
            for tweet in tweets:
                new_result = [str(tweet.id), [tweet.text], tweet.text, "tweet"]
                print(new_result)
                results.append(new_result)
        except:
            pass
        return results
