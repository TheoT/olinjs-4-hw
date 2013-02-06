var models=require('../models');
Tweet=models.Tweet;

exports.newTweet=function(req,res){
	tweet=new Tweet();
	tweet.author=req.session.user.username;
	tweet.content=req.body.new_tweet;
	console.log(tweet)
	tweet.save(function(err){
		if (err)
			return console.log(err);
		res.redirect('/');
	});
}