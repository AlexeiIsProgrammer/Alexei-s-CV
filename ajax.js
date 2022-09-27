const submitBtn = document.getElementById('submit-btn');
const formPanel = document.getElementById('form'); 
const reloadPanel = document.querySelector('.reload-page');
const feedback = document.querySelector('.feedback-word');
const envelopeOpen = document.querySelector('.envelope__top');
const fixedWrapper = document.querySelector('.fixed-wrapper');

submitBtn.addEventListener('click', function () {
	formPanel.classList.add('hide-form-panel');
	reloadPanel.classList.add('show-reload-panel');
	envelopeOpen.classList.add('envelope__top_close');
	feedback.classList.add('feedback-word-anim');
	fixedWrapper.style.zIndex = '1';
})

reloadPanel.addEventListener('click', function () {
	location.reload();
})

// $(document).ready(function () {
// 	$("form").submit(function () {
// 		let text = document.getElementById('email');
// 		//alert(text.value);
// 		if(text.value!= "") {
// 			// Получение ID формы
// 			var formID = $(this).attr('id');
// 			// Добавление решётки к имени ID
// 			var formNm = $('#' + formID);
// 			$.ajax({
// 				type: "POST",
// 				url: 'phpmailer/index.php',
// 				data: formNm.serialize(),
// 				beforeSend: function () {
// 					// Вывод текста в процессе отправки
// 					//alert("Отправка");
// 				},
// 				success: function (data) {
// 					//alert("Успешно");
// 				},
// 				error: function (jqXHR, text, error) {
// 					//alert("Ошибка отправки: "+ error);
// 				}
// 			});
// 			return false;
// 		}
// 		else {
// 			text.classList.add('empty-email');
// 			setTimeout(() => {
// 				text.classList.remove('empty-email');
// 			}, 1000);
// 			//alert('Введите почту!');
// 		}
	
// 	});
// });

