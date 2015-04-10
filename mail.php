<?php

require 'vendor/autoload.php';

class Mail {

    protected $mailer;

    public function __construct() {
        $params = require('config/local.php');
        $transporter = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
                                            ->setUsername($params['username'])
                                            ->setPassword($params['password']);

        $this->mailer = Swift_Mailer::newInstance($transporter);
    }

    public function sendMessage(array $data) {
        $message = Swift_Message::newInstance('Contact Form Recieved')
                                ->setFrom('austin@acburdine.me')
                                ->setTo('acburdine@gmail.com');
        $name = $data['name'];
        $email = $data['email'];
        $msg = $data['message'];
        $subject = $data['subject'];
        $message->setBody('Contact Form Recieved')
                ->addPart("Name: $name<br><br>
                           Email: $email<br><br>
                           Subject: $subject<br><br>
                           Message: $msg", "text/html");
        return $this->mailer->send($message);
    }

}