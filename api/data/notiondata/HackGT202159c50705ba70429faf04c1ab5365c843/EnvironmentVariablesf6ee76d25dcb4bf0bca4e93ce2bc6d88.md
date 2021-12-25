# Environment Variables

# .env (root directory)

```json
SPOTIFY_CLIENT_ID=9e9e7665167f489692cc6b97bbe0db2f
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=9e9e7665167f489692cc6b97bbe0db2f
SPOTIFY_CLIENT_SECRET=52881633680346f7b5f5efedffb19843
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/login
mongodb+srv://synthAdmin:lUp3Q7D*\$\$G0NsG4rz4q@synth-staging.0cyqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

[https://youtu.be/2VZ1B7lhxQ0](https://youtu.be/2VZ1B7lhxQ0)

[https://drive.google.com/drive/folders/1AA4iSM-mHqOzNrWb5FnOp_iGYv2s8rOa?usp=sharing](https://drive.google.com/drive/folders/1AA4iSM-mHqOzNrWb5FnOp_iGYv2s8rOa?usp=sharing)

## Inspiration

We were inspired to create a music-based social media web application because we all personally had a lot of music artists that we were interested in, and wanted to talk to others about. However, it can be hard to find someone who likes the same artists that you do, especially if that artist is not well known. 

In addition to this, we considered how focused society was on social media and music. While social media stems from our desire to connect with others, music stems from our artistic expression. We decided to combine these two and thus created Synth.

## What it does

Our web application aims to match people with similar music interests so they can share liked music and provide recommendations to others. It also provides the user with an overview of their favored songs and artists over either the last 4 weeks, the last 6 months, or the lifetime of the Spotify account. It authenticates users using google and stores their data in a Firestore database to ensure a unique experience for every user.

## How we built it

Synth was built with web technologies such as Next.js, Firebase, and Flask using Typescript and Python as the main languages. Many of the front-end UI components utilized Chakra UI to facilitate a single design system for rapid development. Our backend, consisting of Flask for the server, implemented our custom algorithm to generate user matches, taking into account each user's top genres, artists, and even specific songs. This makes our platform capable of uniting those with very niche music interests. Say you love an indie band that not many people from your town know of. Using our software, one can potentially find other like-minded individuals that are in love with the same indie band, an otherwise difficult thing to do outside of social media.

## Challenges we ran into

One major challenge we ran into was the interactions with the Spotify API. We originally tried to use a Python wrapper of the API, but it was finicky and it was hard to get consistently to work. Instead, we had to directly communicate with the API which was something outside of what we were comfortable with. 

Another challenge we had in building this application was the algorithm to match users. In the case of a much larger user base, it is extremely hard to check every user against every user to find the best match. This is time consuming and impractical. To combat this, we had to figure out a way to greatly decrease the amount of comparisons. In the end, we found a way to initially split everyone into buckets which they are then compared with to find a match.

## Accomplishments that we're proud of

We are proud of its ability to successfully match within our group of three members. Although this may seem small, it was obvious to us who should be matched with who and our algorithm agreed with us which was a reassurance to the eventual success of the algorithm.

We are additionally proud of the way a user's top songs and artists are presented on the dashboard. We thought that the presentation provided an aesthetically pleasing, while also efficient, way of presenting a user's music data.

What we learned:

We struggled with using the Spotify API because at first we tried to use Spotipy which was a Python library for the API, but then we realized that using the API directly would make it a lot easier for us. Through this, we learned how to directly query an API without the wrapper and the benefits and detriments of that. 

Additionally, we learned how to integrate React.js, Flask, and Cloud Firestore in the development of our application for our frontend, backend, and data storage respectively. It was very interesting learning how they work together and how requests are sent through.

Lastly, we had to develop a way to match people with users with similar music tastes. Here, we learned exactly what data we were able to access through the Spotify API and were able to use artists, songs, and genres to match users with each other.

Future directions:

Synth is a social media app and we were able to match similar users with each other. In the future, we would also want to implement messaging through the app so that users would not have to email each other. Within the messaging system, we would also want to include other functionalities such as being able to make Collaborative playlists on Spotify with each other and we were even thinking of giving users the option of allowing others to queue songs for them in Spotify. We also considered adding a feature that would allow users to match with others who both manually selected a specific artist or song. Additionally, we thought of perhaps listing music concerts that people were attending and would perhaps want to connect with others attending the same concert.

There were a lot of future directions that we were considering, and while we were not able to implement them, we're excited to implement them, and other convenience features that we haven't even thought of, in the future.