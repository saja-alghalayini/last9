<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$dbsn = "localhost";
$dbun = "root";
$password = "";
$dbname = "project9";

$conn = mysqli_connect($dbsn,$dbun,$password,$dbname);
if($conn)
{}
else
{
    echo "connection failed";
}


$sql = "select * from products WHERE is_sold=0 AND is_acc=1";
$arr =  array();

$result  = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
} else {
    echo "0 results";
}
print_r(json_encode($arr));


$conn->close();



//     try {
//         $sql = "SELECT * FROM products ";
    
//         $q = $conn->query($sql);
//         $q->setFetchMode(PDO::FETCH_ASSOC);
//     } catch (PDOException $e) {
//         die("Could not connect to the database $dbname :" . $e->getMessage());
//     }
//     while ($row = $q->fetch()): 
//         echo json_encode($row);
//  endwhile; 
//  ?>
    
     