//$(document).ready(function(){
//	$.ajax({
//		type : 'post',
//		url : '/memtorman/board/assayList',
//		data : '',
//		dataType : 'json',
//		success : function(data){
//			$.each(data.list, function(index, items){
//				$('<div/>',{
//					class : 'row no-gap'
//				}).append($('<div/>',{
//					class : 'card mentor-post-card mentor_post_6589'
//				}).append($('<div/>',{
//					class : 'card-header'
//				}).append($('<a/>',{
//					class : 'color-black',
//					type : 'external',
//					href : '/memtros/11087'
//				}).append($('<div>')).append($('<div/>',{
//					class : 'mentor-info'
//				}).append($('<div/>')).append($('<strong/>',{
//					class : 'mentor-name'
//				}))))
//				
//				
//				
//				
//				$('<div/>',{
//					class : 'row no-gap'
//				}).append($('<div/>',{
//					class : 'mentor-image img-circle'
//				}).append($('<img/>',{
//					src : '../storage/'
//				}))).append()
//			});
//		},
//		error : function(){
//			alert('응 안돼~~');
//		}
//	});
//});

//$('.content-body').on('click', function(){
//	var pg = $('#pg').val();
//	var seq = $('#seq').val();
//	if($('#memNick').val() != ''){
//		location.href="/mentor/essayboard/essaymentorBodyView?pg="+pg+"&seq="+seq;
//	} else {
//		location.href="/mentor/member/loginForm";
//	}
//});

$('#essayWriteBtn').on('click', function(){
	location.href="/mentor/essayboard/essayboardWriteForm";
});

var flag = $('#flag').val();
$('#listflag').on('click', function(){
	
	if(flag == '0'){
		location.href="/mentor/essayboard/essayboardList?flag=1";
		console.log("??");
		$('#flag').val('1');
		$(this).addClass('color-gray');
	} else if(flag == '1'){
		location.href="/mentor/essayboard/essayboardList?flag=0";		
		$('#flag').val('0');
		$(this).addClass('button');
	}
	
	
});