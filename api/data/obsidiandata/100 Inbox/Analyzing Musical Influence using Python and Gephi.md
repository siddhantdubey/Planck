# Analyzing the Influence of a Musician using Python

## An Introduction to Network Data and NetworkX

## Metadata
- Linked YouTube Video: None, as of now
- Topics: #productivity #programming #datascience
- Inspiration: [[ICM Math Modeling Competition]]

## Key Reader Takeaway
- The reader will learn how to manipulate network data and discover insights from that data using Python.
- They will also learn how to visualize this data using Gephi.

## Title Ideas
- Analyzing the Influence of a Musician using Python
- How to use Python to determine the Influence of a Musician
- Determining the influence of a musician using Python
- How Influential Were The Beatles? An analysis with Python and NetworkX. 

## Description

## Draft

Artists like to say that imitation is the highest form of flattery, and musicians are no exception. Musicians draw inspiration from their predecessors and inspire their successors—leading to the evolution of the musical landscape. Every once in a while, there comes a rare artist who revolutionizes their genre and becomes an inspiration to many future artists. By identifying these "influencers" and followers, one should be able to explain the story of a genre's (and music's overall) change in style over the years.

In this article, we'll walk through looking at network data that represents the relationships in between musicians and their influencers. We'll analyze the data using Python, specifically using the networkx library and the traditional data science stack of numpy, matplotlib, and pandas. After finishing the article, you'll have learned how to work with network data, visualize it using Gephi, and draw meaningful conclusions from your results!

Without further ado, let's get right into it!

### Data Collection and Workplace Setup

To get started on the project, we're going to need some data to work with. All the data that we'll be using can be found at this link: (insert github repository link). Additionally, all the code for the project can also be found in that Github repository. 

For the easiest way to get setup to begin coding up some Python, I suggest using Google Colaboratory: https://colab.research.google.com/notebooks/intro.ipynb#recent=true. 

If you want to follow along with the visualization parts of this tutorial, you'll need to install and setup Gephi, a network visualization tool that can be found here: https://gephi.org/. This isn't necessary, but making good-looking visualizations is always fun!

### Dataset Overview

Here's a brief summary of each of the data files we'll be using:

- influence_data.csv: This file contains influencers and their followers along with other useful tidbits of data such as the genre of both influencers and followers
- data_by_artist.csv: This file contains data about the musical qualities of the musicians in the dataset with datapoint such as acousticness, valence, tempo, and quite a few more interesting datapoints. 
- data_by_year.csv: This file contains data about the same musical qualities as the previous file, but year by year instead of artist by artist, which allows us to take a look at how music has evolved over the past 100 or so years. 


### Network Analysis

For those of you who don't know, a network is basically a just a graph (a collection of nodes and edges), where the nodes and edges have attributes. With all the data we have, we want to construct a 



