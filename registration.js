window.onload = function() {
	var inp_email = document.querySelector('input[name=email]');
	var inp_phone = document.querySelector('input[name=phone]');
	var inp_name = document.querySelector('input[name=name]');

	document.querySelector('#send').onclick = function() {
		var params = 'email=' + inp_email.value + '&' + 'phone=' + inp_phone.value + '&' + 'name=' + inp_name.value;
		ajaxPost('registration.php', params, function(data, success) {

			if (success) {
				document.querySelector('form').style.display = 'none';
			}

			document.querySelector('#result').innerHTML = data;
		});
	}
}


function ajaxPost(url, params, callback) {

 	var f = callback || function(data, success) {};

	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {  

		if (request.readyState == 4 && request.status == 200) { 

			if (request.responseText == '1') {
				f("Вы зарегистрированы!", true);

			} else {
            	f(request.responseText, false);
       		 }
		}
	}

	request.open('POST', url); 
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
	request.send(params); 
}