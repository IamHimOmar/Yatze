<?php
session_start();
include('db.php');
dbCon();
$score = ($_GET['score']);
/*$score = 555;*/
$name = $_SESSION['name'];


   $sql = "CALL InsertScore('".$score."','".$name."')";
   if (mysqli_query($dbc,$sql)) {

   }
// echo "name :" . $name . "."; /* + " username : " + $name;*/

// echo "SomethingPls";
// $sql= mysql_query("CALL proc('$score','$_SESSION['name']');")''
//  or die(mysql_error());
// if ($dbc->query($sql) === TRUE) {
// } else {
//     echo "Error: " . $sql . "<br>" . $dbc->error;
// }
// $dbc->close();
 ?>
