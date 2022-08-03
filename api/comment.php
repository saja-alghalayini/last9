<?php
include('.connection.php');

// $post_id=$_REQUEST('postId');
// $post_id=6;
// $_GET= json_decode(file_get_contents("php://input"),true);
// $post_id=$_GET('post_id');


$st= $connect->prepare("SELECT comments.post_id,comments.user_id,comments.deleted,comments.id,comments.comment,comments.created_at,users.name,users.image FROM comments LEFT JOIN users ON comments.user_id=users.id;");
$st->execute();
$info=$st->fetchAll(PDO::FETCH_ASSOC);
print_r(json_encode($info));
?>