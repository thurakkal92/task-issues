//login here
$(function(){
    var pins = ['1234','12345','hello'];
        localStorage['login'] = false;
    $('#login-button').on('click',function(){
    	var enteredValue = $('#password').val();
        if((enteredValue == pins[0] || enteredValue == pins[1] || enteredValue == pins[2]) && ($('#username').val() != '')){
        	window.location.href = 'account.html';
    		localStorage['login'] = true;
    		localStorage['name'] = $('#username').val();
    	}else{
    		if($('#username').val() == ''){
    			alert('please enter name');
    		}else {
    			alert('please enter valid pin');
    		}
    		localStorage['login'] = false;
    		localStorage['name'] = '';
    	}
    });
});