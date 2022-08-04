<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$serverName='localhost';
$dbUserName='root';
$password='';
$database='project9';

$con = mysqli_connect($serverName, $dbUserName, $password, $database);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
  }

  
$id=$_REQUEST['id'];
$sql2 = "select * from products where id='$id'";
$result2 = mysqli_query($con, $sql2);
for($i=0; $i<mysqli_num_rows($result2) ;$i++ ){
    echo($i>0?' ,': '').json_encode(mysqli_fetch_object($result2));
    
}?>