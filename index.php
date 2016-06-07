<?php

// include the template parser class
require('parser.php');
session_start();

// instantiate a template Parser object
if ((isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == 1)) {
  $parser=new htmlParser('html/mainpage.html');

}
else {
  header("Location: ../Yatze/login.php");
}

// define the key-value array
$keyValueArray=array('title'=>'Yatze','header'=>'templates/header.php','maincontent'=>'templates/maincontent.php',
 'login'=>'templates/login.php', 'scoreboard' => 'templates/scoreBoard.php','game' => 'templates/game.php',
 'winpopup' => 'templates/winPopup.php', 'highscore' => 'templates/highScore.php');
// replace placeholders with values
$parser->parseHtml($keyValueArray);
// display the page
echo $parser->outputDisplay();

 ?>
