<?php
include_once "./connection.php";

$id = $_REQUEST['id'];    // whrer id 
$name = $_REQUEST["name"];

$email= $_REQUEST["email"];
$phone= $_REQUEST["phone"];
$address= $_REQUEST["address"];



$sql="UPDATE users SET username='$name', email='$email', phone='$phone', address='$address'  WHERE user_id='$id';";

mysqli_query($con,$sql);
?>
