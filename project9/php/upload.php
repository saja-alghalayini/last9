<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// $serverName='localhost';
// $dbUserName='root';
// $password='';
// $database='project9';

// $con = mysqli_connect($serverName, $dbUserName, $password, $database);

// // Check connection
// if (!$con) {
//     die("Connection failed: " . mysqli_connect_error());
//   }



$conn=mysqli_connect('localhost','root','','project9');

if(isset($_POST['name'])){
    $files=$_FILES['picture'];
    $name=mysqli_real_escape_string($conn,$_POST['name']);
    $descc=mysqli_real_escape_string($conn,$_POST['desc']);
    $price=mysqli_real_escape_string($conn,$_POST['price']);
    $owner_id=mysqli_real_escape_string($conn,$_POST['owner_id']);
   
    // print_r($files);

    // $desc=$files['desc'];



    $filename=$files['name'];
    $templocation=$files['tmp_name'];
    $uploaderrors=$files['error'];

    $splitedname = explode('.',$filename);
    $fileextension = strtolower(end($splitedname)) ;

    $allowed_extentions=['png','jpg','jpeg',];
    
    if(in_array($fileextension,$allowed_extentions)){

        if($uploaderrors===0){

            $new_file_name=uniqid().'.'.$fileextension;




// ==================================================================================


            $file_destination='../public/img/'.$new_file_name;

// ==================================================================================





            if(move_uploaded_file($templocation,$file_destination)){
                $connection="INSERT INTO products (name,description,img,min_price,owner_id)VALUES('$name','$descc','$new_file_name','$price','$owner_id')";
                if(mysqli_query($conn,$connection)){
                    echo ' success';
                }else{
                    echo 'not success';
                }
            }else{
                echo 'coule not upload the image';
            }


        }else{
            echo 'There was an error in upload ';
        }

    }else{
        echo'Files with this extension not allowed ';
        
    }


}


if(isset($_POST['fetch'])){
    echo 'posted';
$query='SELECT * FROM project9';
$resuslt = mysqli_query($conn,$query);
$perfumes= mysqli_fetch_all($resuslt, MYSQLI_ASSOC);
echo json_encode($perfumes);

}





?>