$('#menteeUser_Save').on('click', function(){
	$('#member_name_error').empty();
	$('#member_nickname_error').empty();
	
	if($('#member_name').val() == ''){
		$('#member_name').focus();
		$('#member_name_error').text('이름을 입력하세요').css('color','red');
	}else if($('#member_nickname').val() == ''){
		$('#member_nickname').focus();
		$('#member_nickname_error').text('닉네임을 입력하세요').css('color','red');
	}else if($('#member_profile').val() == ''){
		$('#user_profile_image_img').attr('src', '../image/defaultuser.png');
		$('#mentor_request_name_card').val('defaultuser.png');
	}else{
		$('#menteeUserSetting').submit();
	}
});