<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    

    $connection = new mysqli('course-eater.clei4w6g4nki.us-west-1.rds.amazonaws.com', 'root', '', 'db', '3306');
    if ($connection->connect_error) {
        die('Connection Failed: ' .$connection->connect_error);
    } else {

        // find the name of the table to insert into, and replace *registration* with that table
        $hashed_password = $connection->prepare("select password from users where email = (?)");
        // make sure email/password matches database values
        if(password_verify($password, $hashed_password)) {
            // fetch user data
            // redirect to display page?
        } else {
            // 
        }
    }
?>