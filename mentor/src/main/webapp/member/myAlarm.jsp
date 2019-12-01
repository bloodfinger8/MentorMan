<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<div class="page navbar-fixed bookmarks mentor_posts"
	data-name="bookmarks-mentor_posts">
	<div class="page-content">
		<div class="qa-thread-block">
			<div class="block-title strong-title">나의 알림</div>

			<div class="block block-strong no-hairlines">
			</div>

			<div class="mentor-post-block">
				<div class="row no-gap" id="inputAlarmList">
				
				
				<c:forEach var="list" items="${list}">
					<div class="col-100 tablet-100 desktop-100">
						<div class="card mentor-post-card mentor_post_6624">
							<div class="card-header">
								<div>
									<div>
										<strong>${list.myAlarm_title }</strong>
									</div>
								</div>
								<div class="created-at">
									<small>${list.myAlarm_logtime}</small>
								</div>
							</div>

							<div class="card-content-padding">
									<span class="mentor-post-detail">${list.myAlarm_content} </span>
									<i class="far fa-trash-alt alarmGarbage" id="${list.myAlarm_seq}" style="float:right;"></i>
							</div>
						</div>
					</div>
				</c:forEach>
				
				
				</div>
			</div>
		</div>

		<div class="pagination-block">
			<div class="page-entries-info"></div>
		</div>
	</div>
</div>
<script type="text/javascript" src="../js/myAlarm.js"></script>
<script>

let currentPage = 1;
const lastPage = 1;

$(function() {
	$('.mentor-post-card').prop('hidden', true).slice(0, 2).show();
	$("#loadMorePost").on('click', function(e) {
		e.preventDefault();
		$(".mentor-post-card:hidden").slice(0, 2).slideDown();
		if ($(".mentor-post-card:hidden").length == 0) {
			$("#loadMorePost").fadeOut('slow');
		}
	});
});

function toggleThanksNotesText(e) {
	e.preventDefault();
	$(this).hide();
	$(this).prev('span.elipsis').fadeToggle(500);
}

function hideLongThanksNotesText(element) {
	const body = element.text();
	if (body.length > 300) {
		element.html(body.substr(0, 286)
						+ '<span class="elipsis">'
						+ body.substr(286)
						+ '</span><a class="elipsis" href="#"><span class=gray>...</span> 더 보기</a>');
	}
}

$(function() {
	$('.thanks-note-card').prop('hidden', true).slice(0, 3).show();
	$("#loadMoreThanks").on( 'click', function(e) {
		e.preventDefault();
		$(".thanks-note-card:hidden").slice(0, 3).slideDown();
		if ($(".thanks-note-card:hidden").length == 0 && lastPage <= currentPage) {
			$("#loadMoreThanks").fadeOut('slow');
		}
	});
});

$('.thanks-note-body').each(function() {
	hideLongThanksNotesText($(this));
});

$('.thanks-note-body > a.elipsis').click(toggleThanksNotesText);







</script>