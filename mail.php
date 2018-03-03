<?php $name = $_POST['name'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$formcontent="From: $name \n Message: $message";
$recipient = "contact@jasonmedelson.com";
//$subject = "Contact Form";
$mailheader = "From: $name \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
