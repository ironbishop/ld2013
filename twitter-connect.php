<?php 
/*-----------------------------------------------------------------------------------*/
/*	Dont Touch the folowing code
/*-----------------------------------------------------------------------------------*/
session_start();
require_once("tweets/twitteroauth/twitteroauth.php"); //Path to twitteroauth library


/*-----------------------------------------------------------------------------------*/
/*	Tweeter Connect -  Add your gredentials Here
/*-----------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------*/
/*	To get your credentials create an app by going to https://dev.twitter.com/apps
/*  Click on the "Create a new application" and follow the on-screen instructions
/*-----------------------------------------------------------------------------------*/

$twitteruser = "your twitter username"; 		// your twitter username
$notweets = 1;									// how many tweets you want to display
$consumerkey = "key";							// Cosumer Key
$consumersecret = "secret";						// Consumer Secret
$accesstoken = "token";							// Access Token
$accesstokensecret = "token-secret";			// Access Token Secret


/*-----------------------------------------------------------------------------------*/
/*	Dont touch the line below! if you do the sky will fall on your head!
/*-----------------------------------------------------------------------------------*/
include 'tweets/tweets.v1.1.php';