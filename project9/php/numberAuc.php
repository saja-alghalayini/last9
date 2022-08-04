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

//   $pro_id=$_REQUEST['pro_id'];

//   $sql = "SELECT * FROM auctions WHERE  pro_id= '$pro_id';";
  
// $arr =  array();

// $result  = $con->query($sql);

// if ($result->num_rows > 0) {
//     while ($row = $result->fetch_assoc()) {
//         $arr[] = $row;
//     }
// } else {
//     echo "0 results";
// }
// print_r(json_encode($arr));


// $con->close();
$pro_id = $_REQUEST['pro_id'];

$sql = "SELECT COUNT(*) as count_pet
FROM auctions WHERE pro_id='$pro_id';";

$result  = $con->query($sql);
while ($row = $result->fetch_assoc()) {
  echo $row['count_pet'];
}