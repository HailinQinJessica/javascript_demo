$(function(){
	$('#success').hide();
	$('#error-email').hide();
	$('#error-pw').hide();
	$('#form').submit(function(event){
		event.preventDefault();
		var email = $('#email').val();
		var password = $('#password').val();
		if( email === '' || email.indexOf('@') === -1 ){
			$('#error-email').show();
			setTimeout(function(){
				$('#error-email').fadeOut(600);
			}, 5000);
		}else if( password === '' || password.length < 10 ){
			$('#error-pw').show();
			setTimeout(function(){
				$('#error-pw').fadeOut(600);
			}, 5000);
		}else{
			$('#success').show();
			setTimeout(function(){
				$('#success').fadeOut(600);
			}, 5000);
		}
	});
});