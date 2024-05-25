<?php
    $email = $_POST['email'];
    $password = $_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    // $password_confirm = $_POST['password_confirm'];

    $connection = new mysqli('course-eater.clei4w6g4nki.us-west-1.rds.amazonaws.com', 'root', '', 'db', '3306');
    if ($connection->connect_error) {
        echo "Something went wrong";
        die('Connection Failed: ' .$connection->connect_error);
    } else {

        // find the name of the table to insert into, and replace *registration* with that table
        // make sure email/password matches database values
        $statement = $connection->prepare("insert into users(email, hashed_password) values(?, ?)");
        $statement->bind_param("ss", $email, $hashed_password);
        $statement->execute();
        echo "Successfully Registered";
        $statement->close();
        $connection->close();
    }
?>