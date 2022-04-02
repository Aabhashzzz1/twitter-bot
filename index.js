console.log('Starting the bot...');
const Twit = require("twit");
const config = require("./config");

//require('dotenv').config()

var T = new Twit(config);

// const T = new Twit({
//     consumer_key: process.env.app_consumer_key,
//     consumer_secret: process.env.app_consumer_secret,
//     access_token: process.env.app_access_token,
//     access_token_secret: process.env.app_access_token_secret
// });

// start stream and track tweets
const stream = T.stream("statuses/filter", { track: ['#mern', '#MERN', '#mongoDB', 'expressjs', 'reactjs', 'nodejs'] });

// use this to log errors from requests
function responseCallback(err, data, response) {
  console.log(err);
}

// event handler
stream.on("tweet", (tweet) => {
  // perform some action here

  // retweet
  T.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
  // like
  T.post('favorites/create', {id: tweet.id_str}, responseCallback);
});

console.log(T);
