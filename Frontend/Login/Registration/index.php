<p Hellow World></p>


<?php
    $host_name = 'course-eater.clei4w6g4nki.us-west-1.rds.amazonaws.com';
    $db_user = 'admin';
    $db_pass = '8YOpDpknHFz1iKEbKXpl';
    $db_name = 'course-eater';
    $port = '3306';
    
    // if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
    //     echo 'We don\'t have mysqli!!!';
    // } else {
    //     echo 'Phew we have it!';
    // }
    $email = 'a@g.com';//$_POST['email'];
    $password = '&Adaada05';//$_POST['password'];
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    // $password_confirm = $_POST['password_confirm'];
    try {
        // mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $connection = new mysqli($host_name, $db_user, $db_pass, $db_name, $port);
        if ($connection->connect_error) {
            echo "Something went wrong";
            die('Connection Failed: ' .$connection->connect_error);
        } else {
            echo "hELLO THERE";
            // find the name of the table to insert into, and replace *registration* with that table
            // make sure email/password matches database values
            $statement = $connection->prepare("insert into users(email, hashed_password) values(?, ?)");
            $statement->bind_param("ss", $email, $hashed_password);
            $statement->execute();
            echo "Successfully Registered";
            $statement->close();
            $connection->close();
        }
    } catch(Exception $e) {
        echo "Bingus";
        echo 'Bingus Message: ' .$e->getMessage();
    }
?>