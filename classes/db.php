<?php
  /**
   *
   */
   $dbc = NULL;
	function dbCon() {
		global $dbc;
    $servername = "sql7.freemysqlhosting.net";
    $username = "sql7122773";
    $password = "WwcRAFAhbT";
    $database = "sql7122773";
    $dbc = mysqli_connect($servername, $username, $password,$database)
		or die ('Error connecting to the database server');
	}    
?>
