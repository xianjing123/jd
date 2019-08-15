<?php
    $username = $_POST['username'];

    $conn = new mysqli('localhost','root','','jd');

    if($conn->connect_error){
        echo "连接失败";
        return;
    }
    $conn->query('set names utf8');

    $sql = "
        SELECT `username` FROM `users`
        WHERE `username`='$username'
    ";

    $result = $conn->query($sql);

    if($result && $result->num_rows > 0){
        echo "existing";
    }else{
        echo "success";
    }
    
    $conn->close();
