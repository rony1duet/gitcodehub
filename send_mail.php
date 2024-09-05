s<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    // Sanitize input fields
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Your email address
    $to = "m.rony.hossen.2002@gmail.com";
    $subject = "New Contact Message from $name";

    // Email content
    $email_message = "
    Name: $name\n
    Email: $email\n
    Message: \n$message
    ";

    // Email headers
    $headers = "From: $email";

    // Send email
    if(mail($to, $subject, $email_message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message!";
    }
} else {
    echo "Invalid request!";
}
?>
