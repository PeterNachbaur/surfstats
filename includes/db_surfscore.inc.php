<?php
//Making sure we escape any apostrophes//
$email = mysql_real_escape_string($_POST['email']);

$con = mysql_connect("localhost","morawec_surf","surfScore!");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("morawec_email", $con);

$sql="INSERT INTO email (emails, date)
VALUES
('$email', NOW())";


if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
  //All Good? --> Refresh the page - > But we should display a thank you message with jQuery now.
			header ('Location: ../registration_new.php'); 
			exit();

mysql_close($con);
?> 