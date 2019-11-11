<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <div class="block block-strong inset">
          <div class="segmented">
            <a class="button button-active" type="external" href="/mentor/mentee/menteeStudentProfile">
              대학생/취준생
</a>
            <a class="button " type="external" href="/mentor/mentee/menteeEmployeeProfile">
              직장인
</a>          </div>
        </div>

        <div class="block inset top-block text-align-center">
          <h1 class="title">
            멘티 정보
          </h1>

          <div class="block-footer">
            질문을 남길 때 멘토님에게 함께 전달되는 필수 정보입니다.
          </div>
        </div>

        <div class="block inset">
  <form class="simple_form new_student_profile" id="new_student_profile" novalidate="novalidate" action="/settings/student_profile" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="8xtsxEE1pzLq+WTV7bVDBO4p0dZwuWdZKP/U219oiYETY9q23kW1yRYApoTuZ9QlMWa4xA4YQgILNDx3PqGzlA==">
    <div class="list form-list no-hairlines">
      <ul>
        <div class="label-title">
          <label class="string optional" for="student_profile_school_name">학교</label>
          
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input class="string optional" type="text" name="student_profile[school_name]" id="student_profile_school_name">
            </div>
          </div>
        </li>

        <div class="label-title">
          <label class="string required" for="student_profile_major_name">전공 <abbr title="required">*</abbr></label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input class="string required" type="text" name="student_profile[major_name]" id="student_profile_major_name">
            </div>
          </div>
        </li>

        <div class="row horizontal">
          <div class="col-50">
            <div class="label-title">
              <label class="string required" for="student_profile_study_status">재학/졸업 <abbr title="required">*</abbr></label>
            </div>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap input-dropdown-wrap">
                  <select class="select required" name="student_profile[study_status]" id="student_profile_study_status"><option value="">선택해주세요</option>
<option value="재학">재학</option>
<option value="졸업">졸업</option>
<option value="기타">기타</option></select>
                </div>
              </div>
            </li>
          </div>

          <div class="col-50">
            <div class="label-title">
              <label class="string optional" for="student_profile_grade">학년</label>
              <small class="form-text text-muted">재학생만 선택해주세요.</small>
            </div>
            <li class="item-content item-input">
              <div class="item-inner">
                <div class="item-input-wrap input-dropdown-wrap">
                  <select include_blank="translate" class="select optional" name="student_profile[grade]" id="student_profile_grade"><option value=""></option>
<option value="1학년">1학년</option>
<option value="2학년">2학년</option>
<option value="3학년">3학년</option>
<option value="4학년">4학년</option></select>
                </div>
              </div>
            </li>
          </div>
        </div>

        <div class="label-title">
          <label class="text required" for="student_profile_spec">스펙 <abbr title="required">*</abbr></label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <textarea class="text required" placeholder="현재 스펙을 자세히 적어주세요. 멘토님의 상세한 답변을 받을 수 있습니다." name="student_profile[spec]" id="student_profile_spec"></textarea>
            </div>
          </div>
        </li>

        <div class="label-title">
          <label class="text optional" for="student_profile_etc">기타</label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <textarea class="text optional" placeholder="관심 분야 등 멘토님이 답변에 참고할 만한 사항을 적어주세요. Ex. 금융권 취업을 준비하고 있습니다." name="student_profile[etc]" id="student_profile_etc"></textarea>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <input type="submit" name="commit" value="수정하기" class="btn button button-big button-fill" style="height: 100%;">
    <br><br><br><br>
</form>
</div>
<script>
$(function(){
	$('#menteeProfile').attr('class', 'list-button color-gray item-link active');
});
</script>

