<?php
include_once "./connection.php";

$firstname=$_REQUEST["firstname"];
$lastname=$_REQUEST["lastname"];
$email=$_REQUEST["email"];
$phone=$_REQUEST["phone"];
$password=$_REQUEST["password"];
$address=$_REQUEST["address"];
// $phone=$_REQUEST["phone"];

$sql="INSERT INTO users (firstname, lastname, email, phone, password, address) 
                   VALUES ('$firstname','$lastname','$email','$phone','$password','$address')";

mysqli_query($con,$sql);
?>