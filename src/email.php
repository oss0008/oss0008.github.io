<?php
// Editted from the version written by Grant Storey, 11/7/18

// NOTE: You must have composer.json to use this method

// Change this to your redirect page
// EXAMPLE: $redirect = "formSubmitted.html";
$redirect = "---";
// Change this to the email you want to send results to.
// EXAMPLE: $sendToEmail = "myFormResults@email.com";
$sendToEmail = "olivia.s.smith12@gmail.com";
// Change this to the email you want to send results from (must be an @gmail.com email ).
// EXAMPLE: $sendFromEmail = "myEmail@gmail.com";
$sendFromEmail = "---";
// The password for the email you are sending from (whatever you write instead of myEmail@gmail.com)
$sendFromPassword = "---";

// Optionally change this to your desired subject line for emails
$subject = "Form Submission for Your Website";

// Optionally change the name of the mailer to your desired name
$sendFromName = "Form Mailer";

// DO NOT CHANGE ANYTHING BELOW THIS LINE

// ==================================================================
// based on PHPMailer example
// https://github.com/PHPMailer/PHPMailer/blob/master/examples/gmail.phps

//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';

if ($redirect == "") {
  echo("ERROR: you must set the redirect variable at the top of the submit php file.");
} else if ($sendToEmail == "") {
  echo("ERROR: you must set the destination email variable at the top of the submit php file.");
} else if ($sendFromEmail == "") {
  echo("ERROR: you must set the source email variable at the top of the submit php file.");
} else {
  $messageArray = array("The following information was submitted:\n");

  // Add each of the form inputs to the message
  foreach ($_REQUEST as $key => $value) {
    if ($key === "PHPSESSID") {
      continue;
    }
    if (substr($key, 0, strlen("SQLiteManager")) === "SQLiteManager") {
      continue;
    }

    $keyValue = htmlspecialchars($key) . ":  ";

    $printValue = $value;
    // if this is an array, need to print it differently
    if (is_array($value)) {
      $printValue = join(", ", $value);
    }
    $keyValue .= htmlspecialchars($printValue);

    array_push($messageArray, $keyValue);
  }

  $messageHTML = join("<br/>", $messageArray);
  $message = join("\n", $messageArray);

  //Create a new PHPMailer instance
  $mail = new PHPMailer;
  //Tell PHPMailer to use SMTP
  $mail->isSMTP();
  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
  $mail->SMTPDebug = 0;
  //Set the hostname of the mail server
  $mail->Host = 'smtp.gmail.com';

  // use
  // $mail->Host = gethostbyname('smtp.gmail.com');
  // if your network does not support SMTP over IPv6

  //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
  $mail->Port = 587;
  //Set the encryption system to use - ssl (deprecated) or tls
  $mail->SMTPSecure = 'tls';
  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;

  //Username to use for SMTP authentication - use full email address for gmail
  $mail->Username = $sendFromEmail;
  //Password to use for SMTP authentication
  $mail->Password = $sendFromPassword;

  //Set who message is from
  $mail->setFrom($sendFromEmail, $sendFromName);
  //Set who the message is to be sent to
  $mail->addAddress($sendToEmail);
  //Set the subject line
  $mail->Subject = $subject;
  //Read an HTML message body from an external file, convert referenced images to embedded,
  //convert HTML into a basic plain-text alternative body
  $mail->Body = $messageHTML;
  $mail->AltBody = $message;

  //send the message
  $mail->send();

  // Redirect to specified location
  header("Location: " . $redirect);
  return;
}

?>
