<?php
/*session_start();
require_once("twitteroauth/twitteroauth.php"); //Path to twitteroauth library
 
/*$twitteruser = "renemerino";
$notweets = 1;
$consumerkey = "xXpxNisKyAqZYJI6fSng";
$consumersecret = "JQTq1SMsNFQLUOfNph4j5BsO7h6BGFu7H5AYU7Bqigs";
$accesstoken = "21499487-2xBAVptIS9GCkomUpXwerygaHbOOTnqQYyuck74HJ";
$accesstokensecret = "1PFU0iFkWX2NK8Af7HR4XUG7OGDcUMY9A9A2mFzEDSY";*/
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
	$connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
	return $connection;
}
 
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
 
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);

//Turn tweets into JSON
$jsonTweetsArray = json_encode($tweets);

//Read tweets from JSON
$tweetStatus = json_decode($jsonTweetsArray, true);

// Tweet variables
$text		= $tweetStatus[0][text];
$user 		= $tweetStatus[0][user][name];
$screenName	= $tweetStatus[0][user][screen_name];

// Find URls
$reg_exUrl = '/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/';

// Display tweets
echo '<ul>';
// Check if there is a url in the text
if(preg_match($reg_exUrl, $text, $url)) {

   // make the urls hyper links
   echo preg_replace($reg_exUrl, '<a href="'.$url[0].'" target="_blank">'.$url[0].'</a> ', $text);
   echo " - <a href='https://twitter.com/$screenName' target='_blank'>$user</a></li>";

} else {

   // if no urls in the text just return the text
   echo $text;

}

echo '</ul>';

?>