<?php
include('db.php');

dbCon();

$username=$_POST['username'];
$pass=$_POST['password'];


$query="SELECT * FROM users WHERE username='$username';";
$result = mysqli_query($dbc,$query)or die('error');

if (mysqli_num_rows($result)==null) {
	mysqli_close($dbc);
	echo "not logged";
	header('refresh:2;url=index.php');
	exit();
}

$row=mysqli_fetch_array($result);

	$dbpassword=$row['password'];

//echo "Retrieved from database;";

 if ($pass==$dbpassword){
 	session_start();
 	$_SESSION['name'] = $row['username'];
 	$_SESSION['loggedin']= 1;
 	echo "succesfull login. Welcome,".$username;
 	header("refresh:1;url=../index.php");
 }
 else{
 	echo "Wrong username or password";
 	//header("refresh:1;url=index.php");
 }


?>
