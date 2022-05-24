# 🪶 Twitter Bot

**```A basic Twitter bot for likes and retweets.```**

### 🏗️ Changes -

> Get your keys and token from [Twitter Developer Portal](https://developer.twitter.com/en).

* You must have Elevated access to the Twitter API v2.
* Replace ``<YOUR-...>`` and fill your account key and token in [config.js](config.js) file.
```javascript
module.exports = {
    consumer_key: '<YOUR-CONSUMER-KEY>',
    consumer_secret: '<YOUR-CONSUMER-KEY-SECRET>',
    access_token: '<YOUR-ACCESS-TOKEN>',
    access_token_secret: '<YOUR-ACCESS-TOKEN-SECRET>',
    timeout_ms: 10000,
}
```
* Replace ``<YOUR-...>`` and fill your preferred hashtag in [index.js](index.js) file.
```javascript
const stream = T.stream("statuses/filter", { track: '<YOUR-FAVORITE-HASHTAG>'});
```
* If you want to use multiple hastags then -
```javascript
EXAMPLE - 
const stream = T.stream("statuses/filter", { track: ['#mern', '#MERN', '#mongoDB', 'expressjs', 'reactjs', 'nodejs'] });
```

---

### 🍴 Fork and Clone the Repo 

> First, you need to fork the `twitter-bot` repo. You can do this by clicking the `Fork` button on the top right corner of the repo. If you are new to forking, please read this [GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to get started.

> Once forked, you can clone the repo by clicking the `Clone` or `Download` button on the top right corner of forked repo.

---

### ⬇️ Install Dependencies


```bash
npm install
```
Or
```bash
yarn install
```

### 💨 Run project


```bash
node index.js
```
Or
```bash
npm start
```

