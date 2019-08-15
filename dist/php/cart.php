<?php
    header('content-type:text/json');
    if(!empty($_COOKIE['userid'])){
        $userid = $_COOKIE['userid'];
    }else{
        echo"[]";
        return;
    }
    
    $conn = new mysqli('localhost','root','','jd');
    if($conn->connect_error){
        echo "连接失败";
        return;
    }
    $conn->query('set names utf8');

    $sql = "
        SELECT `id`,`name`,`price`,`count`,`img` FROM `cart`
        WHERE `userid` = $userid
    ";

    $result = $conn->query($sql);
    $arr = array();
    if($result && $result->num_rows>0){
        $row = $result->fetch_assoc();
        while($row !== null){
            $arr []= $row;
            $row = $result->fetch_assoc();
        }
        echo json_encode($arr);
    }else{
        echo "[]";
    }
    $conn->close();
?>