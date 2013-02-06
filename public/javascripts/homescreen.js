$(function () {
	$('.add_tweet').submit(function(){
		var username= $('.tweet_input').attr('name');
		var tweetContent=$('#tweet_text').val();
		if (tweetContent.length>140){
			alert('Tweet too long');
			return false
		}
		$.post("/tweets/user", $('.add_tweet').serialize());
		$('#tweet_text').val('')
		$('#tweets').prepend(
			'<div class="tweet"> OMG A TWIT by '+username+'<p>'+tweetContent+'</p>'
			);
		return false;
	})
})