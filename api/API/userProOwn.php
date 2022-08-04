<?php
include_once 'connection.php';
$id = $_REQUEST['id']; 

$sql="SELECT * from products WHERE  owner_id='$id'";


$arr =  array();

$result  = $con->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
} 
print_r(json_encode($arr));


$con->close();

 ?>