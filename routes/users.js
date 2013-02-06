
/*
 * GET users listing.
 */


var models=require('../models');
User=models.User;
Tweet=models.Tweet;

exports.list=function(req,res){
	res.render('users_show',{title:'Login'});
}

exports.new=function(req,res){
	User.find({username: req.body.add_username}).execFind(function(err,userDocs){
		if (userDocs.length > 1 )
		{
			req.session.user = userDocs[0];
			res.redirect('/');
			return
		}
		else{
			newUser= new User();
			newUser.username=req.body.add_username;
			newUser.save(function(err){
				req.session.user = newUser;
				res.redirect('/');
			});
		}

	});
};
exports.home=function(req,res){
	Tweet.find({}).execFind(function(err,tweetList){
		res.render('home',
		{
			title:'Sketchy Twitter Home',
			user: req.session.user,
			twits: tweetList.reverse()
		});
	});
}
