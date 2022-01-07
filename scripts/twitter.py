import os
import pandas as pd
import tweepy as tw
from dotenv import load_dotenv

load_dotenv()

consumer_key = os.environ.get('consumer_key')
consumer_secret = os.environ.get('consumer_secret')
access_token = os.environ.get('access_token')
access_token_secret = os.environ.get('access_token_secret')

auth = tw.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

# Create API object
api = tw.API(auth)

search = "python (from:@sidcodes)"
tweets = tw.Cursor(api.search_tweets, q=search).items()
all_tweets = [[tweet.text, tweet.id] for tweet in tweets]
tweet_links = [tweet.id for tweet in tweets]
print(all_tweets[:5])
