<?php

switch ($_SERVER['REQUEST_METHOD']) {
    case "OPTIONS": // Allow preflighting to take place.
        //header("Access-Control-Allow-Origin: *");
        //header("Access-Control-Allow-Methods: POST");
        //header("Access-Control-Allow-Headers: Content-Type");
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Authorization");

        exit;
    case "POST": // Send the email;
        header("Access-Control-Allow-Origin: *");

        $email = $_POST['email'];
        $name = $_POST['name'];
        $message = $_POST['message'];

        $recipient = 'contact@nicole-hollaender.com';
        $subject = "Contact From <$email>";
        $fullMessage = "From: " . $name . "<br>" . $message;

        $headers = [
            'MIME-Version: 1.0',
            'Content-type: text/html; charset=utf-8',
            "From: noreply@mywebsite.com"
        ];

        if (mail($recipient, $subject, $fullMessage, implode("\r\n", $headers))) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false]);
        }
        break;
    default: // Reject any non POST or OPTIONS requests.
        header("Allow: POST", true, 405);
        exit;
}

