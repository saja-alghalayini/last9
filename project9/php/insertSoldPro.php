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
  



  $user_id = $_REQUEST['user_id'];
  $price = $_REQUEST['price'];
  $pro_id = $_REQUEST['pro_id'];
  
  
  
  
  $sql = "INSERT INTO soldpro(user_id, pro_id, price) VALUES('$user_id', '$pro_id', '$price')";
  
  mysqli_query($con,$sql);
  
  $con->close();
?>