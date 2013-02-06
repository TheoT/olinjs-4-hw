var mongoose= require('mongoose');

var userSchema=mongoose.Schema({
	username: String
});

var tweetSchema=mongoose.Schema({
	author: String,
	content: String
});
var User = mongoose.model('User',userSchema);
var Tweet= mongoose.model('Tweet',tweetSchema);
exports.User=User;
exports.Tweet=Tweet;