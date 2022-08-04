<?php
include_once "./connection.php";

$postId=$id=$_REQUEST["id"];

$sql = "delete from data where id='$id'"; 

mysqli_query($con, $sql);

$con=null;
?>