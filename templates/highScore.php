<div class="highScore">
    <?php
      include('../Yatze/classes/db.php');
      $servername = "sql7.freemysqlhosting.net";
      $username = "sql7122773";
      $password = "WwcRAFAhbT";
      $database = "sql7122773";
      $dbc = mysqli_connect($servername, $username, $password,$database)
  		or die ('Error connecting to the database server');
      $query = "SELECT * FROM users";
      $result = mysqli_query($dbc,$query)or die('error');

      if ($result->num_rows > 0) {
          // output data of each row
          $count = 1;
          while($row = $result->fetch_assoc()) {
              $username =  $row["username"];
              $highscore = $row["highscore"];
              echo "<h1>#$count</h1>";
              $count++;
              echo "<div class='Infos'><p>username: $username</p><p>highscore: $highscore</p></div>";
          }
      } else {
          echo "0 results";
      }
     ?>  
</div>
