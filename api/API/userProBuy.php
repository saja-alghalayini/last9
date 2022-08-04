<?php
include_once 'connection.php';
$id = $_REQUEST['id']; 

$sql="SELECT * from products WHERE user_id='$id' AND is_sold=1";


$arr =  array();

$result  = $con->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
} else {
    $arr[] = null;
}
print_r(json_encode($arr));


$con->close();

 ?>