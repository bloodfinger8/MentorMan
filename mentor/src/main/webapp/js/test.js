//$(document).ready(function(){
//	var seq = $('#seq').val();
//	$.ajax({
//		type : 'post',
//		url : '/mentor/essayboard/getessayList',
//		data : 'seq=' + seq ,
//		dataType : 'json',
//		success : function(data){
//			alert(JSON.stringify(data));
//			$.each(data.list, function(index, items) {
//				$('<div/>', {
//					class : 'col-100 tablet-100 desktop-100'
//				}).append($('<div/>', {
//					class : 'card mentor-post-card mentor_post_6385 shadow-card'
//				}).append($('<div/>', {
//					class : 'card-content card-content-padding profile-card'
//				}).append($('<a/>', {
//					class : 'content-body',
//					type : 'external',
//					href : '/mentor/essayboard/essaymentorBodyView?seq=${list.seq }&pg=${pg}'
//				}).append($('<div/>', {
//					class : 'mentor-post-title'
//				})).append($('<div/>', {
//					class : 'mentor-post-detail'
//				})))).append($('<div/>', {
//					class : 'card-footer'
//				}).append($('<a/>', {
//					class : 'color-gray js-bookmark',
//					type : 'external',
//					rel : 'nofollow',
//					href : ''
//				}).append($('<i/>', {
//					class : 'far fa-bookmark'
//				}))).append($('<div/>', {
//					class : 'created-at'
//				}).append($('<small/>', {
//					text : items.logtime
//				}))))).appendTo('.row no-gap');
//			});
//		},
//		error : function(){
//			
//		}
//	});
//});