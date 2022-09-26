<?php
include_once 'connection.php';
$id = $_REQUEST['id']; 

$sql="SELECT * from users WHERE user_id='$id'";

$result=mysqli_query($con,$sql);

if(!$result){
    http_response_code(404);
    die(mysqli_error($con));
}



for($i=0; $i<mysqli_num_rows($result) ;$i++ ){
  echo($i>0?' ,': '').json_encode(mysqli_fetch_object($result));
  
}

 ?>