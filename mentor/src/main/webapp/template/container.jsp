<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%-- 오늘 날짜 --%>
<c:set var="now" value="<%=new java.util.Date()%>" />
<fmt:formatDate var="today" value="${now}" pattern="yyyy/MM/dd" />
<style>
.badge {
	right: 0;
	position: absolute;
	margin: 10px 5px 10px 10px;
	vertical-align: middle;
}
</style>

<div class="page navbar-fixed intros index">
	<div class="page-content">
		배너배너배너배너배너<br>
		배너배너배너배너배너<br>
		배너배너배너배너배너<br>
		배너배너배너배너배너<br>
		배너배너배너배너배너<br>
		
		<%-- 모임 영역 시작 --%>
		<div class="open-mentoring-block">
			<div class="block-title strong-title">
				모임 <a type="external" href="/mentor/meetingboard/meetingboardList">더
					보기</a>
			</div>

			<%--모임 리스트 뿌려주는 영역--%>
			<div class="row no-gap">
				<c:forEach var="meetingboardDTO" items="${meetingboardList}">
					<fmt:parseDate var="parseDate"
						value="${meetingboardDTO.meetingboard_day}" pattern="yyyy/MM/dd" />
					<fmt:formatDate var="meetingday" value="${parseDate}"
						pattern="MM월 dd일 (E)" />
					<fmt:formatDate var="meetingdayCompare" value="${parseDate}"
						pattern="yyyy/MM/dd" />
					<div class="col-100 tablet-50 desktop-33">
						<div class="card open-mentoring-card">
							<div class="thumbnail">
								<a type="external"
									href="/mentor/meetingboard/meetingboardView?seq=${meetingboardDTO.meetingboard_seq}">
									<img src="../image/job_code/${meetingboardDTO.job_code}.jpg"
									style="height: 210px;">
								</a>
							</div>
							<div class="card-content card-content-padding">
								<h3 class="title">${meetingboardDTO.meetingboard_title}</h3>
								<div class="description" style="height: 80px;">
									${meetingboardDTO.meetingboard_subtitle}</div>
								<div class="list">
									<ul>
										<li>
											<div class="item-content">
												<div class="item-inner">
													<div class="item-title">장소</div>
													<div class="item-after">${meetingboardDTO.meetingboard_address}</div>
												</div>
											</div>
										</li>
										<li>
											<div class="item-content">
												<div class="item-inner">
													<div class="item-title">일시</div>
													<div class="item-after">${meetingday}</div>
												</div>
											</div>
										</li>
										<li>
											<div class="item-content">
												<div class="item-inner">
													<div class="item-title">주최</div>
													<div class="item-after">${meetingboardDTO.meetingboard_host}</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div class="mentor-profile">
									<a class="mentor-info" type="external"
										href="/mentor/mentor/mentorInfoView?mentors=${meetingboardDTO.member_seq}">
										<div class="mentor-image img-circle">
											<c:if
												test="${meetingboardDTO.member_profile == 'profile.jpg'}">
												<img src="../image/profile.jpg" width="28" height="28">
											</c:if>
											<c:if
												test="${meetingboardDTO.member_profile != 'profile.jpg'}">
												<img
													src="../storage/${meetingboardDTO.mentor_email}/${meetingboardDTO.member_profile}"
													width="28" height="28">
											</c:if>
										</div>
										<div class="mentor-name">
											<span>${meetingboardDTO.member_name}</span> <small>멘토</small>
										</div>
										<div class="job">
											<small>${meetingboardDTO.mentor_company},${meetingboardDTO.mentor_department}</small>
										</div>
									</a>
									<c:if test="${today <= meetingdayCompare}">
										<c:if test="${meetingboardDTO.meetingboard_state == 0 }">
											<span class="badge ongoing-badge"
												style="background-color: #ff2d55;">
												<div>모집중</div>
											</span>
										</c:if>
										<c:if test="${meetingboardDTO.meetingboard_state == 1 }">
											<span class="badge">
												<div>모집완료</div>
											</span>
										</c:if>
									</c:if>
									<c:if test="${today > meetingdayCompare}">
										<span class="badge">
											<div>종료</div>
										</span>
									</c:if>
								</div>
							</div>
						</div>
					</div>
				</c:forEach>
				<div class="col-100 tablet-50 desktop-33"></div>
				<div class="col-100 tablet-50 desktop-33"></div>
			</div>
		</div>
		<%-- 모임 영역 끝 --%>


		<%-- 신규 멘토 영역 시작 --%>
		<div class="mentor-block">
			<div class="block-title strong-title">
				신규 멘토 <a type="external" href="/mentors">더 보기</a>
			</div>

			<div class="row no-gap">
				<c:if test="${mentorList ne '[]'}">
					<c:forEach var="mentor" items="${mentorList}">
						<div class="col-100 tablet-50 desktop-25">
							<div class="card mentor-card">
								<a type="external" href="#"> <!-- 수정 -->
									<div style="background-image: url()" class="cover-image"></div>

									<div class="mentor-image img-circle">
										<c:if test="${mentor.member_profile != 'profile.jpg'}">
											<img width="50" height="50"
												src="../storage/${mentor.mentor_email}/${mentor.member_profile}">
										</c:if>
										<c:if test="${mentor.member_profile == 'profile.jpg'}">
											<img width="50" height="50" src="../image/profile.jpg">
										</c:if>
									</div>

									<div class="mentor-info">
										<div class="name">
											<span class="mentor-name">${mentor.member_name}</span> 
											<span class="position">멘토</span> 
										</div>

										<div class="job">
											<div>${mentor.mentor_company}</div>
											<div>${mentor.mentor_department}</div>
										</div>
									</div>
								</a>
								<div class="primary-mentoring-info">
									<div class="title">${mentor.job_type}</div>
									<div class="info">${mentor.mentor_represent}</div>
								</div>

								<div class="ask-button">
							        <a class="question button button-small button-fill" id="mentorQuestions" type="external" onclick="mentor_question_seq(${mentor.mentor_seq}, 1)"> 질문하기 </a>
								</div>
							</div>
						</div>
					</c:forEach>
				</c:if>
				<div class="col-100 desktop-25"></div>
				<div class="col-100 desktop-25"></div>
				<div class="col-100 desktop-25"></div>
			</div>
		</div>
		<%-- 신규 멘토 영역 끝 --%>

		<%-- 명예 멘토 영역 시작 --%>
		<div class="mentor-block">
			<div class="block-title strong-title">
				명예 멘토 <a type="external" href="/mentors?hall_of_fame=true">더 보기</a>
			</div>

			<div class="row no-gap">
				<div class="col-100 tablet-50 desktop-25">
					<div class="card mentor-card">
						<a type="external" href="/mentors/500">
							<div style="background-image: url()" class="cover-image"></div>

							<div class="mentor-image img-circle">
								<img width="50" height="50" src="" />
							</div>

							<div class="mentor-info">
								<div class="name">
									<span class="mentor-name">최상화</span>
									<span class="position">멘토</span>

									<i class="fas fa-trophy highlight"></i>
								</div>

								<div class="job">
									<div>삼성전자</div>
									<div>생활가전사업부 선행개발팀</div>
								</div>
							</div>
						</a>
						<div class="primary-mentoring-info">
							<div class="title">연구/설계</div>
							<div class="info">전자회사 연구개발직은 뭐 하는 사람인가?</div>
						</div>

						<div class="ask-button">
							<a class="button button-small button-fill" type="external"
								href="/mentors/500/questions/new"> 질문하기 </a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<%-- 명예 멘토 영역 끝 --%>

		<%-- 중간 이미지 시작 --%>
		<div class="row no-gutter new-mentor-block-wrapper text-align-center">
			<div class="col-100 tablet-50">
				<div class="img-gradient">
					<img src="../image/mentor_hero-fb0fabb03ac9a924cc639d018d7f1520d49c3f0f1bef7ef871a6c5141658a781.jpg" />
				</div>
			</div>

			<div class="col-100 tablet-50 text-block-wrapper">
				<div class="text-block">
					<h2 class="title">
						가치 있는<br>커리어 경험을<br>공유해 보세요
					</h2>

					<div class="block button-block">
						<a class="button button-big button-fill button-inline" type="external" href="/mentor/mentor/mentorapplyForm">멘토 지원하기</a>
					</div>
				</div>
			</div>
		</div>
		<%-- 중간 이미지 끝 --%>

		<%-- 추천 에세이 시작 --%>
		<div class="mentor-post-block">
			<div class="block-title strong-title">
				추천 에세이 <a type="external"
					href="/mentor_posts?featured_mentor_post=true">더 보기</a>
			</div>

			<div class="row no-gap">
				<div class="col-100 tablet-50 desktop-33">
					<div class="card mentor-post-card mentor_post_6616">
						<div class="card-header">
							<a class="color-black" type="external" href="/mentors/29272">
								<div>
									<div class="mentor-image img-circle">
										<img src="" />
									</div>

									<div class="mentor-info">
										<div>
											<strong class="mentor-name">조영훈</strong> <small>멘토</small>
										</div>

										<div class="job">
											<small> NHN PAYCO · 신사업팀 </small>
										</div>
									</div>
								</div>
							</a>
							<div class="created-at">
								<small>2019년 10월 28일</small>
							</div>
						</div>

						<div class="card-content card-content-padding">
							<a class="content-body" type="external" href="/mentor_posts/6616">
								<div class="mentor-post-title">취업 장기전_ #총론 2:전략적 취업</div>

								<div class="mentor-post-detail">전략적 취업 : 취업을 위한 취업, 경력직
									채용에 유리한 입지를 구축하기 위하여 전략을 세우고 취업을 하는 것.필자는 이전 chapter에서 현 취업
									시장에서 경력직 채용에 입지와 이점에 대하여 계속 이야기하였다. 그리고 취업 장기전에 돌입하기 전 시장 조사,
									목표 설정, 일정 산출을 또한 로드맵 작성의 중요성을 이야기하였다. ‘그래서 난 어디에서 경...</div>
							</a>
						</div>

						<div class="card-footer">
							<a class="color-gray js-bookmark" type="external"
								data-remote="true" rel="nofollow" data-method="post"
								href="/mentor_posts/6616/bookmarks"> <i
								class="far fa-bookmark" aria-hidden="true"></i> 2
							</a>

							<div class="created-at"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<%-- 추천 에세이 끝 --%>

		<%-- 신규 에세이 시작 --%>
		<div class="mentor-post-block">
			<div class="block-title strong-title">
				신규 에세이 <a type="external" href="/mentor_posts">더 보기</a>
			</div>

			<div class="row no-gap">
				<div class="col-100 tablet-50 desktop-33">
					<div class="card mentor-post-card mentor_post_6620">
						<div class="card-header">
							<a class="color-black" type="external" href="/mentors/32160">
								<div>
									<div class="mentor-image img-circle">
										<img src="" />
									</div>

									<div class="mentor-info">
										<div>
											<strong class="mentor-name">손현곤</strong> <small>멘토</small>
										</div>

										<div class="job">
											<small> elice · 운영팀 </small>
										</div>
									</div>
								</div>
							</a>
							<div class="created-at">
								<small>2019년 10월 30일</small>
							</div>
						</div>

						<div class="card-content card-content-padding">
							<a class="content-body" type="external" href="/mentor_posts/6620">
								<div class="mentor-post-title">Growth</div>

								<div class="mentor-post-detail">중요한 것은 목표를 이루는 것이 아니라, 그
									과정에서 무엇을 배우며 얼마나 성장하느냐이다. -앤드류 매튜스 우리는 모두 성장을 갈망한다. 일을 하며 목표를
									세우고 이를 실행한다. 실패를 하기도 하고 성공하기도 하며 우리는 성장을 한다.하지만 이 명언은 틀렸다.
									현실에서는 목표를 이루는 것이 중요하지 않을 수가 없다.오늘은 내가 성장(Growth)에 대...</div>
							</a>
						</div>

						<div class="card-footer">
							<a class="color-gray js-bookmark" type="external"
								data-remote="true" rel="nofollow" data-method="post"
								href="/mentor_posts/6620/bookmarks"> <i
								class="far fa-bookmark" aria-hidden="true"></i> 1
							</a>

							<div class="created-at">
								<!-- <small> -->
								<!--   읽음 -->
								<!--   3 -->
								<!-- </small> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<%-- 신규 에세이 끝 --%>


	</div>
</div>


<script>
	$(document)
			.on(
					'click',
					'.banner',
					function(e) {
						var id = document
								.getElementsByClassName('owl-item active')[0].children[0].id;
						$.ajax({
							type : 'GET',
							url : window.location.href + 'banners/' + id
									+ '/views_count'
						});
					});
</script>



<script>
	!function(e, o, n) {
		window.HSCW = o, window.HS = n, n.beacon = n.beacon || {};
		var t = n.beacon;
		t.userConfig = {}, t.readyQueue = [], t.config = function(e) {
			this.userConfig = e
		}, t.ready = function(e) {
			this.readyQueue.push(e)
		}, o.config = {
			docs : {
				enabled : !0,
				//고객센터 링크
				baseUrl : "https://itdaa.helpscoutdocs.com/"
			},
			contact : {
				enabled : !0,
				formId : "e6312df0-a823-11e8-89df-0ee9bb0328ce"
			}
		};
		var r = e.getElementsByTagName("script")[0], c = e
				.createElement("script");
		c.type = "text/javascript", c.async = !0,
				c.src = "https://djtflbt20bdde.cloudfront.net/", r.parentNode
						.insertBefore(c, r)
	}(document, window.HSCW || {}, window.HS || {});
</script>


<script>
	HS.beacon
			.config({
				color : '#ff2d55',
				icon : 'message',
				showContactFields : true,
				showName : true,
				showSubject : true,
				topArticles : true,
				translation : {
					searchLabel : '질문을 입력하거나 키워드로 검색하세요.',
					searchErrorLabel : '찾을 수 없습니다.',
					noResultsLabel : '찾을 수 없습니다.',
					contactLabel : '문의하기',
					attachFileLabel : '파일 첨부',
					attachFileError : '파일이 너무 큽니다.',
					nameLabel : '이름',
					nameError : '이름을 입력해 주세요.',
					emailLabel : '이메일',
					emailError : '이메일을 입력해 주세요.',
					topicLabel : '어떤 문의인가요?',
					topicError : '리스트에서 선택해주세요.',
					subjectLabel : '제목',
					subjectError : '제목을 입력해 주세요.',
					messageLabel : '현재 이용하고 계신 itdaa 서비스는 Beta 버전입니다.여러분의 소중한 의견은 itdaa 서비스 개발에 큰 힘이 됩니다. 보내주신 의견들은 성실히 검토하겠습니다. 감사합니다.',
					messageError : '내용을 입력해 주세요.',
					sendLabel : '보내기',
					contactSuccessLabel : '문의사항이 접수되었습니다.',
					contactSuccessDescription : '소중한 의견 보내 주셔서 감사합니다. 내용 검토 후에 회신 드리겠습니다.'
				},
				topics : [ {
					val : '버그 신고',
					label : '버그 신고'
				}, {
					val : '이용 문의',
					label : '이용 문의'
				}, {
					val : '서비스 제안',
					label : '서비스 제안'
				}, {
					val : '콘텐츠 제안',
					label : '콘텐츠 제안'
				}, {
					val : '기타',
					label : '기타'
				}, ],
				attachment : true,
				instructions : '무엇을 도와드릴까요?',
				zIndex : 10050,
				poweredBy : false
			});

	HS.beacon.ready(function() {

		$(document).on('click', '.open-beacon', function(e) {
			e.preventDefault();
			HS.beacon.open();
		});
	});
</script>
<script src="../js/mentor.js"></script>