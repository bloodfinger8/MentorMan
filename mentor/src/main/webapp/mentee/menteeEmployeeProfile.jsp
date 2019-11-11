<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
          <div class="block block-strong inset">
            <div class="segmented">
              <a class="button " type="external" href="/mentor/mentee/menteeStudentProfile">
                대학생/취준생
</a>
              <a class="button button-active" type="external" href="/mentor/mentee/menteeEmployeeProfile">
                직장인
</a>            </div>
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
  <form class="simple_form new_employee_profile" id="new_employee_profile" novalidate="novalidate" action="/settings/employee_profile" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="put"><input type="hidden" name="authenticity_token" value="hhreOZYSsXmks4jLEywdLukLJQIgpOXMlQwoVWSPqqhmYmhLCWKjglhKSpoQ/ooPNkRMEF4FwJe2x8D5BUaQvQ==">
    <div class="list form-list no-hairlines">
      <ul>
        <div class="label-title">
          <label class="integer required" for="employee_profile_career">연차 <abbr title="required">*</abbr></label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input class="numeric integer required" type="number" step="1" name="employee_profile[career]" id="employee_profile_career">
            </div>
          </div>
        </li>

        <div class="label-title">
          <label class="string required" for="employee_profile_education">최종학력 <abbr title="required">*</abbr></label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap input-dropdown-wrap">
              <select class="select required" name="employee_profile[education]" id="employee_profile_education"><option value="">선택해주세요</option>
<option value="대학원 졸업">대학원 졸업</option>
<option value="대학교 졸업">대학교 졸업</option>
<option value="전문대학교 졸업">전문대학교 졸업</option>
<option value="고등학교 졸업 이하">고등학교 졸업 이하</option></select>
            </div>
          </div>
        </li>

        <div class="label-title">
          <label class="string optional" for="employee_profile_school_name">출신학교</label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input class="string optional" type="text" name="employee_profile[school_name]" id="employee_profile_school_name">
            </div>
          </div>
        </li>

        <div class="label-title">
          <label class="text required" for="employee_profile_major_career">주요 경력사항 <abbr title="required">*</abbr></label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <textarea class="text required" placeholder="경력 사항을 자세히 적어주세요. 멘토님의 상세한 답변을 받을 수 있습니다." name="employee_profile[major_career]" id="employee_profile_major_career"></textarea>
            </div>
          </div>
        </li>

        <div class="label-title">
          <label class="text optional" for="employee_profile_etc">기타</label>
        </div>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <textarea class="text optional" placeholder="관심 분야 등 멘토님이 답변에 참고할 만한 사항을 적어주세요. Ex. 외국계로 이직하는 것을 고민중입니다" name="employee_profile[etc]" id="employee_profile_etc"></textarea>
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