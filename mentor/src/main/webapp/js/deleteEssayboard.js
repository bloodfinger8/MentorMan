function essayDeleteCheck(seq) {
	var toastWithCallback = app.toast.create({
		text: '정말로 삭제하시겠습니까?',
		position: 'center',
		closeButton: true,
		on: {
			close: function() {
				location.href='/mentor/essayboard/essayboardDelete?seq='+seq;
			}
		}
	});	
	toastWithCallback.open();
}