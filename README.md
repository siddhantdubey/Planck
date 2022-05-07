# Planck


## Introduction
Hello everybody, this is my personal search engine called Planck (named after the Planck constant).
The code for this isn't very clean at all, considering it was mostly just a hack I put together briefly over Winter Break. I'll try and update the code
throughout the summer to make it more readable in addition to adding more features, but I have some more projects I want to work on for the time being and
the application itself works, so I'm satisfied.

## Running It Yourself
If you want to run it yourself, then make sure you have Python installed and some way of getting JavaScript packages (NPM/Yarn). 

For the basic features, that's all you need. Once you have everything (including the dependencies) installed, then you'll have to boot up the frontend and backend servers separately. Booting up the backend is simple, just run `flask run` while you're in the root directory. To set up the frontend, `cd` into the `frontend` folder and run `yarn start` or `npm start` depending on what your package manager is. After that, you're ready to go!

Of course, you'll also need to update the paths in `Search.py` with paths to your own local data, but that shouldn't take you too long.

If you want to search your own tweets you'll need to make a `.env` file locally and include your secrets in there. If you don't want to do that, delete the following lines from `Search.py`:

```python
consumer_key = os.environ.get('consumer_key')
consumer_secret = os.environ.get('consumer_secret')
access_token = os.environ.get('access_token')
access_token_secret = os.environ.get('access_token_secret')

auth = tw.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tw.API(auth)

...

tweet_search = args['query'] + " (from:@sidcodes)"
        try:
            tweets = tw.Cursor(api.search_tweets, q=tweet_search).items()
            for tweet in tweets:
                new_result = [str(tweet.id), [tweet.text], tweet.text, "tweet"]
                print(new_result)
                results.append(new_result)
        except:
            pass
```

That's it! You're all set up and ready to use Planck if you want to, although I highly recommend making your own that's tailored to your needs and hopefully better organized.
