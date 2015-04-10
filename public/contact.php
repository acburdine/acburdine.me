<?php

ini_set('display_errors', 1);

require '../mail.php';

$data = $_POST;

$mail = new Mail();
$didSendMessage = $mail->sendMessage($data);

if($didSendMessage) {
    $message = 'Thank you. I will get back to you as soon as I can.';
} else {
    $message = 'Sorry, something went wrong. <a href="/#contact">Try again?</a>';
}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Austin Burdine is a HTML, Javascript, PHP, and Java developer">
        <meta name="author" content="Austin Burdine">

        <title>acburdine.me | the website of Austin Burdine</title>

        <!-- Bootstrap Core CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

        <!-- Custom CSS -->
        <link href="css/grayscale.css" rel="stylesheet">

        <!-- Custom Fonts -->
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <link href="http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic" rel="stylesheet" type="text/css">
        <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-lg-offset-4">
                    <p><?=$message?></p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-lg-offset-4">
                    <a href="/"><i class="fa fa-double-angle-left"></i> Back to main page</a>
                </div>
            </div>
        </div>
    </body>
</html>