# I got AI to make an Anime that Doesn't Exist

Status: Uploaded
Tags: Machine Learning, entertainment, programming, project showcase

# Script

## Hook

Anime. There's a lot of them! There's a lot of good anime (play a clip of HxH in the background) and a lot of bad anime (play a clip of SAO or some other bad anime). But the undisputable best anime of all time is Soldier, Soldier, Soldier, King. Lovingly referred to by its fans as S3K. You probably don't know about it, and that's because its kind of an underground thing.

Here's what it is about, directly from its wiki. Set in the historical fantasy kingdom of Hseesh, S3K follows the story of two soldiers (Huey and Luey) conspiring to rebel and assassinate their monarch (King Terry) after he sent them on a mission that got their brother, the third soldier, (Duey) killed. The premise is amazing and the character work flawless.

There's just one teensy problem though, S3K doesn't actually exist.

***Title Card plays and some music.***

## More Intro

S3K was a practical joke invented by twitch streamer Atrioc and his chat to fool another streamer Toph, who Atrioc claims is one of the biggest weebs he knows. So Atrioc came up with a title, and his chat ended up making a whole wiki dedicated to the show with information about the plot, characters, and even a controversy around the name of the show.

Toph read through the wiki and fell for the whole thing until a certain word in the wiki clued him in to the fact that the whole thing might be fake. 

***(Play clip of Toph reading and saying KURINJI??)***

After I saw the YouTube video Atrioc posted showing the saga of S3K, I decided to get to work on attempting to get an AI model to make S3K. 

It didn't take too many hours, I was just too lazy to work on it and I had to finish finals so I could graduate high school. But once I graduated high school and got some other important things done, I sat down to work on making S3K a reality. If you don't want to hear about my previous attempts or the brief technical details I spent some time trying to make as not mind-numbing as possible, then skip to this timestamp to see the 4 minute teaser for S3K, the AI generated anime. Keep in mind, it's not really animation and more like a storyboard with voice actors reading the script. Still cool as hell though.

## Attempt No. 1

My first attempt at making S3K a real thing was 21 days ago when I got GPT-3, OpenAI's language model and the most powerful language model ever made, to write a preliminary script for the first few minutes of S3K. Then, I posted that cheese on r/Atrioc and got a few upvotes to fufill my dopamine needs for the day. 

After that, I got to thinking about how I could actually make this something that didn't suck and I realized I needed to a few things.

1. Make a good script (something GPT-3 would help at tremendously)
2. Make animations (something I soon realized wouldn't really work as intended)
3. Use TTS to make the written script into an audio clip.

So let's temper expectations here, you're not going to see something Studio Ghibli would make. It really is a storyboard with voice actors reading the script, and let's talk about why that is.

## How I made It

Before we talk about the images I made, let's talk about the script and how that was generated.

Like I mentioned earlier, I used GPT-3 to write the script for the anime. Note that this version of the script is slightly different from the version I posted on reddit. A good way to think of GPT-3 for text generation is that it is an insanely cracked out autocomplete that also used a ton of energy while it was being made. Anyways, I prompted the AI by passing it in the description of Soldier, Soldier, Soldier, King from the wiki, an initial setting prompt ("Huey and Luey sitting on rocks facing each other, in the background is their home"). Then I passed in Huey's first line, which is Luey, I can't keep biding our time like this. Then, I let GPT-3 run and autocomplete the rest of the script. Once it was done, I edited the script by clearly marking all the stage directions as stage directions.

Now that I had a pretty decent looking script, I moved on to making the "animation" for the video. 

Now, as far as I'm aware there are no pre-existing models that can make an actual animation that follows some coherent plot. So what I decided to do instead was make images matching each of the stage directions and then stitching those images together to match the audio track of the tts script. There's actually quite a few models now that people use to make images based on text prompts, like DALL-E also made by OpenAI, but for this project I used VQGAN + CLIP, a model developed by EleutherAI. I just opened up a google colab notebook made by Katherine Crowson, and used that to make these images. I used each of the stage directions, made them more explicit and passed them in to the model as a prompt with the additional phrase of Ghibli animation added to the end, in order to sort of get an anime art style. I saved these images and then I was ready to move on to making the script an actual audio file. 

I wrote a spaghetti code and needlessly overcomplicated Python script that took the GPT-3 script and based on the character that said the voice line or if it was a narrator saying the stage directions, made a request to the Polly Streamlabs API with different  TTS voices picked. My python script then opened the url that the API returned, and using selenium and pyautogui downloaded the file and saved it. 

Then, I wrote another Python script that took each of these files, sorted them in the correct order, and combined them all to form the audio file for the anime! It wasn't that bad and I'll leave a link to the github repository with the code in the description a little while after posting this video. Comment if you wanna see it and I'll update you when it's up! 

Now that I had all the basic parts together, all I needed to do was put it together in DaVinci resolve with my dogwater editing skills and here's what I ended up with. Everytime I hear the Brian TTS voice, i picture xQc's face so I hope you guys do as well as you watch this teaser for Soldier, Soldier, Soldier, King also known as S3K, the greatest anime that never was.

## Play the Anime Clip

Include subtitles so people can tell which character is speaking!

## Conclusion

So that was my shitty attempt at making an "AI" generated anime. Honestly, it came out better and worse than I expected, but I still think it was really funny and if anyone wants to try to act out the script then I'll leave a link to it in the comments if you want to try your own hand at acting out this wonderful teaser of the potential of S3K. If you have any suggestions on what you wanna see next, then leave them in the comments down below! If you wanna support the development of content like this that sometimes takes a lot of compute power on my Nvidia(TM) GPU, then consider hitting the patreon, link in description, or just subscribe to the YouTube channel! It helps me a lot, and you can always unsubscribe later. 

If you wanna discuss this video with other people or just ask me questions, then hop in my discord server (link in description), or dm me on twitter/instagram/tiktok all of which I've linked in the description down below. As always, if you enjoyed the video, hit the like button, drop a comment, and make sure you're subscribed! Also, subscribe to Atrioc. That's all for me, have a good one y'all!