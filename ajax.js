$(document).ready(function () {
	$("form").submit(function () {
		let text = document.getElementById('email');
		//alert(text.value);
		if(text.value!= "") {
			// Получение ID формы
			var formID = $(this).attr('id');
			// Добавление решётки к имени ID
			var formNm = $('#' + formID);
			$.ajax({
				type: "POST",
				url: 'phpmailer/index.php',
				data: formNm.serialize(),
				beforeSend: function () {
					// Вывод текста в процессе отправки
					//alert("Отправка");
				},
				success: function (data) {
					//alert("Успешно");
				},
				error: function (jqXHR, text, error) {
					//alert("Ошибка отправки: "+ error);
				}
			});
			return false;
		}
		else {
			text.classList.add('empty-email');
			setTimeout(() => {
				text.classList.remove('empty-email');
			}, 1000);
			//alert('Введите почту!');
		}
	
	});
});

