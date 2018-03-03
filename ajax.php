<?php
require 'vendor/autoload.php';
if (isset($_POST['action'])) {
    switch ($_POST['action']) {
        case 'insert':
            insert();
            break;
        case 'select':
            select();
            break;
        case 'SEND';
          SEND();
          break
    }
}

function select() {
    echo "The select function is called.";
    exit;
}

function insert() {
    echo "The insert function is called.";
    exit;
}

function SEND(){
  $from = new SendGrid\Email("Example User", "test@example.com");
  $subject = "Sending with SendGrid is Fun";
  $to = new SendGrid\Email("Example User", "edelson.m.jason@gmail.com");
  $content = new SendGrid\Content("text/plain", "and easy to do anywhere, even with PHP");
  $mail = new SendGrid\Mail($from, $subject, $to, $content);
  $apiKey = getenv('SENDGRID_API_KEY');
  $sg = new \SendGrid($apiKey);
  $response = $sg->client->mail()->send()->post($mail);
  echo $response->statusCode();
  print_r($response->headers());
  echo $response->body();
}
?>
