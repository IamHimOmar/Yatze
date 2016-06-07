<?php

// include the template parser class
require('parser.php');
session_start();

// instantiate a template Parser object
  $parser=new htmlParser('html/highScore.html');

// define the key-value array
$keyValueArray=array('title'=>'Yatze','header'=>'templates/header.php', 'highscore' => 'templates/highScore.php');
// replace placeholders with values
$parser->parseHtml($keyValueArray);
// display the page
echo $parser->outputDisplay();

 ?>
