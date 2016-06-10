<?php
    include('db.php');

    dbCon();

    $username=$_POST['username'];
    $pass=$_POST['password'];

    $sql = "INSERT INTO users (username, password,highscore)
    VALUES ('$username', '$pass',0)";


    if ($dbc->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $dbc->error;
    }

    $dbc->close();
    header('refresh:1;url=../login.php');
 ?>
