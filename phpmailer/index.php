
<?php

        require 'PHPMailer.php';
        require 'SMTP.php';
        require 'Exception.php';

        $email = $_POST['mail'];
            
        // Формирование самого письма
        $title = "Dear Alex!";
        $body = "
        <h2>You get new feedback!</h2>
        <br> <p style='color:black; font-size: 32px; font-family: cursive;'>$email</p><br><br>
        ";
        
        // Настройки PHPMailer
       
            //echo "<script>console.log( 'aboba' );</script>";
            // Прикрипление файлов к письму
        // if (!empty($file['name'][0])) {
        //     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        //         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        //         $filename = $file['name'][$ct];
        //         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
        //             $mail->addAttachment($uploadfile, $filename);
        //             $rfile[] = "Файл $filename прикреплён";
        //         } else {
        //             $rfile[] = "Не удалось прикрепить файл $filename";
        //         }
        //     }   
        // }
        // Отправка сообщения
        
        $mail = new PHPMailer\PHPMailer\PHPMailer();
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        //$mail->SMTPDebug = 2;
            $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
        // Настройки вашей почты
        $mail->Host       = 'smtp.yandex.by'; // SMTP сервера вашей почты
        $mail->Username   = 'saintabobus@yandex.by'; // Логин на почте
        $mail->Password   = 'bsuoszjyaulivzcs'; // Пароль на почте
        $mail->Port       = 465;
        $mail->SMTPSecure = "ssl";
        $mail->setFrom('saintabobus@yandex.by', 'Feedback'); // Адрес самой почты и имя отправителя
    
        // Получатель письма
        $mail->addAddress('avenge.now.r@mail.ru');
        //echo "<script>console.log( 'aboba' );</script>";
        // Прикрипление файлов к письму
    // if (!empty($file['name'][0])) {
    //     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
    //         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
    //         $filename = $file['name'][$ct];
    //         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
    //             $mail->addAttachment($uploadfile, $filename);
    //             $rfile[] = "Файл $filename прикреплён";
    //         } else {
    //             $rfile[] = "Не удалось прикрепить файл $filename";
    //         }
    //     }   
    // }
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body; 

    $mail->send();
                
        
            
            




