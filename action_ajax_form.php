<?php

if (isset($_POST["name"]) && isset($_POST["mail"]) && isset($_POST["msg"])) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'mail' => $_POST["mail"],
        'msg' => $_POST["msg"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>