$( document ).ready(function() {
    $(".submit").click(
		function(){
			sendAjaxForm('form', 'phpmailer/index.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	alert('Mail: ' + result.mail);
    	},
    	error: function(response) { // Данные не отправлены
            //alert('Ошибка. Данные не отправлены.');
    	}
 	});
}