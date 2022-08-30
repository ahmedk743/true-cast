#Implement all this concept by machine learning with flask

from flask import Flask, escape, request, render_template, jsonify
import pickle
import json

from flask_cors import CORS

from sklearn.metrics import accuracy_score
from facebook_scraper import get_posts
from twitter_scraper import get_tweets
from tweetscrape.profile_tweets import TweetScrapperProfile 

from facebook_page_scraper import Facebook_scraper


vector = pickle.load(open("vectorizer.pkl", 'rb'))
model = pickle.load(open("finalized_model.pkl", 'rb'))
score = pickle.load(open("score.pkl", 'rb'))
c_matrix = pickle.load(open("c_matrix.pkl", 'rb'))
dataset_size = pickle.load(open("dataset_size.pkl", 'rb'))
fakeCount = pickle.load(open("fakeCount.pkl", 'rb'))
realCount = pickle.load(open("realCount.pkl", 'rb'))



app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "*"}})



@app.route('/')
def home():
    return jsonify("pong")

@app.route('/tw_scrape', methods=['GET', 'POST'])
def tw_scrape():
    # sources = ["cnn",  "aljazeera","bbcnews","foxnews","arynewsasia","nytimes","11alive"]
    sources = ["aljazeera"]
    # loop through the sources and get the posts
    # twitter_posts = []
    # tweets = get_tweets('CNN', pages=3)
    # print(next(tweets))

    

    # tweets_list = [tweets]
    # print([tweets])
    # print generator
    # for tweet in tweets:
    #     twitter_posts.append(tweet['text'])
    
    # print(json_data)
    # results = [ item['content'] for item in json_data ]
    # print(results)
    # for x in json_data:
    #     keys = x.keys()
    #     print(keys)

    # print(len(twitter_posts))
    return "json_data"
    
@app.route('/fb_scrape', methods=['GET', 'POST'])
def fb_scrape():
    # sources = ["cnn",  "aljazeera","bbcnews","foxnews","arynewsasia","nytimes","11alive"]
    sources = ["aljazeera"]
    page_name = "cnn"
    posts_count = 10
    browser = "firefox"
    proxy = "IP:PORT" #if proxy requires authentication then user:password@IP:PORT
    timeout = 600 #600 seconds
    headless = True
    res = Facebook_scraper(page_name, posts_count, browser, timeout=timeout, headless=headless)
    json_data = res.scrap_to_json()
    # loop through the sources and get the posts
    # facebook_posts = []
    # for source in sources:
    #     print(source)
    #     posts = get_posts(source, pages=3)
    #     posts_list = list(posts)
    #     for post in posts_list:
    #         facebook_posts.append(post["text"])

    # print(len(facebook_posts))
    # response = jsonify(data=facebook_posts)
    return json_data

@app.route('/prediction', methods=['GET', 'POST'])
def prediction():
    news = request.get_json()["news"]
    # news = "sdf sdf asdf asdfsdfew as"
    # print("++++++++++++")
    print(news)
    # print("++++++++++++")

    predict = model.predict(vector.transform([news]))[0]
    print("++++++++++++") 
    # print(vector.transform([news]))
    # print(y_test)
    print(type(vector.transform([news])))
    a = vector.transform([news])
    vectorised = [((i, j), a[i,j]) for i, j in zip(*a.nonzero())]

    vectors_array = []
    for x in vectorised:
        temp = []
        temp.append(int(x[0][0]))
        temp.append(int(x[0][1]))
        temp.append(float(x[1]))
        vectors_array.append(temp)


    confusion_matrix = c_matrix.tolist()
    print("++++++++++++") 
    

    return jsonify(predict= predict, score= score, c_matrix= confusion_matrix, dataset_size= dataset_size[0], fakeCount=fakeCount, realCount=realCount, vectors=vectors_array)
    # return "REAL"


   


if __name__ == '__main__':
    app.debug = True
    app.run()
