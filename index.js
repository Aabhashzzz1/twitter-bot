console.log('Starting the bot...');
const Twit = require("twit");
const config = require("./config");

let T = new Twit(config);

// start stream and track tweets
const stream = T.stream("statuses/filter", { track: '<YOUR-FAVORITE-HASHTAG>'});

//for multiple hashtags
//const stream = T.stream("statuses/filter", { track: ['#mern', '#MERN', '#mongoDB', 'expressjs', 'reactjs', 'nodejs'] });

// event handler
stream.on("tweet", (tweet) => {
  // retweet
  T.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
  // like
  T.post('favorites/create', {id: tweet.id_str}, responseCallback);
});

