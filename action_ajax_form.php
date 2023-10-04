<?php

if (isset($_POST["mail"])) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'mail' => $_POST["mail"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>