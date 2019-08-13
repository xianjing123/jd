<?php
    header("Content-Type: application/json");
    $username = $_POST['username'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost','root','','jd');

    if($conn->connect_error){
        echo"连接失败";
        return;
    }
    $conn->query('set names utf8');

    $sql = "
        SELECT `id`,`username`,`password` FROM `users`
        WHERE `username` = '$username' AND `password` = '$password'
    ";

    $result = $conn->query($sql);

    if($result && $result->num_rows>0){
        $user = $result->fetch_assoc();
        $userid = $user['id'];
        setcookie("userid","$userid",0,'/');
        setcookie("username","$username",0,'/');
        echo '{"result": true}';
    }else{
        echo '{"result": false}';
    }

    $conn->close();

?>