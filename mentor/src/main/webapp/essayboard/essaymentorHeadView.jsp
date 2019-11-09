<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="page navbar-fixed mentee_programs index">
	<div class="page-content">
		<div class="view view-main">
			<div class="page navbar-fixed mentors show" data-name="mentors-show">
				<div class="page-content">
					<div class="block mentor-info-block">
						<div class="mentor-image-left img-circle">
							<img width="150" height="150" src="https://www.itdaa.net/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFVaIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--061e0d293e7c26ff035c44e62dc362907ab020b0/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MY21WemFYcGxTU0lOTXpBd2VETXdNQ0VHT2daRlZEb1FZWFYwYjE5dmNtbGxiblJVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--335722d0477df6beb4db54fcbab426022c0d08ed/KakaoTalk_20180416_212036888.jpg"/>
						</div>
						<div class="block mentor-info mentor-info-box">
							<div class="name">
								<span class="mentor-name profile-name">
								${essayboardDTO.name } <small>멘토</small>
								</span>
							</div>
							<div class="job">
								${essayboardDTO.company }
							</div>
							<div class="detail-block">
								<div class="mentoring-info">
									<div class="mentoring-type-block">
										<div class="chip chip-outline no-border-radius mentor-index">
											<div class="chip-label">
												<span>답변율 <strong class="highlight">90%</strong></span>
											</div>
										</div>
										<div class="chip chip-outline no-border-radius mentor-index">
											<div class="chip-label">
												<span>답변수 <strong class="highlight">27건</strong></span>
											</div>
										</div>
										<div class="chip chip-outline no-border-radius mentor-index">
											<div class="chip-label">
												<span>뱃지 <strong class="highlight">17개</strong></span>
											</div>
										</div>
										<div class="chip chip-outline no-border-radius mentor-index">
											<div class="chip-label">
												<span>팔로워 <strong class="highlight">94명</strong></span>
											</div>
										</div>
									</div>
								</div>
								<div class="mentoring-info">
									<div class="title text-decoration-underline">
										 대표 멘토링 분야
									</div>
									<div class="mentoring-type-block">
										 핀테크/이커머스/창업/취업/자소서/면접/대외활동/스타트업/외국계/마케팅/전략기획/인하우스/에이전시/
									</div>
								</div>
								<div class="mentoring-info">
									<div class="title">
										 직무 유형
									</div>
									<div class="mentoring-type-block">
										<a type="external" href="/mentors?job_type%5B%5D=7">
										<div class="chip chip-outline no-border-radius job-tags">
											<div class="chip-label">
												 서비스 기획/UI, UX등
											</div>
										</div>
										</a>
									</div>
								</div>
								<div class="mentoring-info">
									<div class="title">
										 멘토링 분야
									</div>
									<div class="mentoring-type-block">
										<a type="external" href="/mentors?mentoring_type%5B%5D=1">
										<div class="chip chip-outline no-border-radius job-tags">
											<div class="chip-label">
												 직무
											</div>
										</div>
										</a>
									</div>
								</div>
								<div class="btn-container">
									<div class="profile-btn">
										<a class="button col js-bookmark user_14134" data-params="followed_id=14134" data-disable-with="..." type="external" data-remote="true" rel="nofollow" data-method="post" href="/relationships">
										팔로우 </a>
									</div>
									<div class="profile-btn">
										<a class="button button-fill" type="external" href="/mentors/554/questions/new">
										질문하기 </a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="block block-strong mentor-detail-block">
						<div class="block-title">
							 멘토 소개
						</div>
						<div class="block">
						</div>
						<div class="block-title">
							 주요 경력
						</div>
						<div class="block">
						</div>
						<div class="block-title">
							 기타 사항
						</div>
						<div class="block">
						</div>
					</div>
					<div class="block section thanks-block">
						<div class="title-wrap">
							<div class="block-title strong-title">
								 고맙습니다
							</div>
							<div class="count">
								 (18)
							</div>
						</div>
						<div class="row no-gap">
							<div id='thanks-notes'>
								<div class="block mentee-detail-block thanks-note-card">
									<div class="mentee-info">
										<div class="mentee-image img-circle">
											<img src="https://d2ljmlcsal6xzo.cloudfront.net/assets/fallback/temporary_profile-65c08fd0b2bb95434e40fa62b682df18417765c3b0ac165dcb5b3e9035f01b98.png"/>
										</div>
										<div class="mentee-name">
											 김경은
										</div>
										<div class="sent-date">
											 2019년 5월 2일
										</div>
									</div>
									<div class="thanks-note-body">
										 감사합니다!! 참고해서 제것도 만들어보려고 합니다 감사합니다!
									</div>
								</div>
							</div>
						</div>
						<div class="text-align-center">
							<button class="button load-more" id="loadMoreThanks">더 보기</button>
						</div>
					</div>
					<div class="block mentor-post-block section">
						<div class="title-wrap">
							<div class="block-title strong-title">
								 에세이
							</div>
							<div class="count">
								 (${essayTotal })
							</div>
						</div>
						<div class="row no-gap">
						<c:forEach var="list" items="${list }">
							<div class="col-100 tablet-100 desktop-100">
									<div class="card mentor-post-card mentor_post_6385 shadow-card">
										<div class="card-content card-content-padding profile-card">
											<a class="content-body" type="external" href="/mentor/essayboard/essaymentorBodyView?seq=${list.seq }&pg=${pg}">
											<div class="mentor-post-title">
												 ${list.title }
											</div>
											<div class="mentor-post-detail">
												 ${list.content }
											</div>
											</a>
										</div>
										<div class="card-footer">
											<a class="color-gray js-bookmark" type="external" data-remote="true" rel="nofollow" data-method="post" href="/mentor_posts/6385/bookmarks">
											<i class="far fa-bookmark" aria-hidden="true"></i>
											10 </a>
											<div class="created-at">
												<small>
												${list.logtime } </small>
											</div>
										</div>
									</div>
								</div>
							</c:forEach>
							</div>
							
						<div class="text-align-center load-more-container">
							<button class="button load-more" id="loadMorePost">더 보기</button>
						</div>
						<div style="margin-top: 50px; margin-bottom: 100px;">
               				<input type="button" onclick="location.href='/mentor/essayboard/essayboardList'" value="목록" class="btn button button-big button-fill" style="line-height: 0px;">
           				</div>
					</div>
				</div>
			</div>
			<input type="hidden" id="seq" name="seq" value="${essayboardDTO.seq }">
			<script>
			  let currentPage = 1;
			  const lastPage = 2
			  $(function () {
			    $('.open-mentoring-card').prop('hidden', true).slice(0, 2).show();
			    $("#loadMoreContents").on('click', function (e) {
			        e.preventDefault();
			        $(".open-mentoring-card:hidden").slice(0, 2).slideDown();
			        if ($(".open-mentoring-card:hidden").length == 0) {
			            $("#loadMoreContents").fadeOut('slow');
			        }
			    });
			  });
			  $(function () {
			    $('.mentor-post-card').prop('hidden', true).slice(0, 2).show();
			    $("#loadMorePost").on('click', function (e) {
			        e.preventDefault();
			        $(".mentor-post-card:hidden").slice(0, 2).slideDown();
			        if ($(".mentor-post-card:hidden").length == 0) {
			            $("#loadMorePost").fadeOut('slow');
			        }
			    });
			  });
			  function toggleThanksNotesText(e){
			    e.preventDefault();
			    $(this).hide();
			    $(this).prev('span.elipsis').fadeToggle(500);
			  }
			  function hideLongThanksNotesText(element){
			    const body = element.text();
			    if (body.length > 300) {
			      element.html(body.substr(0, 286) + '<span class="elipsis">' + body.substr(286) + '</span><a class="elipsis" href="#"><span class=gray>...</span> 더 보기</a>');
			    }
			  }
			  $(function () {
			    $('.thanks-note-card').prop('hidden', true).slice(0, 3).show();
			    $("#loadMoreThanks").on('click', function (e) {
			        e.preventDefault();
			        if ($(".thanks-note-card:hidden").length == 0) {       
			          $.ajax({
			            type: "GET",
			            url: "https://www.itdaa.net/mentors/14134/thanks",
			            data: { page: currentPage + 1 },
			            contentType: "application/json",
			            success: function(result){
			              currentPage += 1;
			              const final = $(result).each(function(){
			                hideLongThanksNotesText($(this).find('.thanks-note-body'));
			              });
			              final.on('click', '.thanks-note-body > a.elipsis', toggleThanksNotesText);
			              final.prop('hidden', true).appendTo('#thanks-notes');
			              $(".thanks-note-card:hidden").slice(0, 3).slideDown();
			            }
			          });
			        } else {
			          $(".thanks-note-card:hidden").slice(0, 3).slideDown();
			          if($(".thanks-note-card:hidden").length == 0 && lastPage <= currentPage){
			            $("#loadMoreThanks").fadeOut('slow');
			          }
			        }
			    });
			  });
			  $('.thanks-note-body').each(function(){
			    hideLongThanksNotesText($(this));
			  });
			  $('.thanks-note-body > a.elipsis').click(toggleThanksNotesText);
			</script>
		</div>
	</div>
</div>