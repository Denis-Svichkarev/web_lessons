<?php
	
	date_default_timezone_set('UTC');
	
	$email = trim($_POST['email']);
	$phone = trim($_POST['phone']);
	$name = trim($_POST['name']);
	$date = date('Y-m-d H:i:s');

	if ($email == '' || $phone == '' || $name == '') {
		echo 'Заполните все поля!';

	} else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo 'Введите корректный email!';
	
	} else {
		file_put_contents('apps.txt', "$dt $email $phone $name \n", FILE_APPEND); // запись в файл/бд
		echo '1';
	}
