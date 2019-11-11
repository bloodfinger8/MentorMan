<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <div class="block block-strong no-hairlines hero-title">
          <h1 class="title">
            비밀번호 변경
          </h1>
        </div>

        <div class="block inset mentor-request-block">
  <form class="simple_form edit_user" id="edit_user_51907" novalidate="novalidate" action="/settings/password" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch"><input type="hidden" name="authenticity_token" value="t/jZnRBKhs74ObZc77cZeIK7R/6lJc6SBaFUwxKWR51XgG/vjzqUNQTAdA3sZY5ZXfQu7NuE68kmarxvc199iA==">
    <div class="list form-list no-hairlines">
      <ul>
        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input autocomplete="current-password" class="password optional" placeholder="현재 비밀번호" type="password" name="user[current_password]" id="user_current_password">
            </div>
          </div>
        </li>

        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input autocomplete="new-password" class="password optional" placeholder="새 비밀번호" type="password" name="user[password]" id="user_password">
            </div>
          </div>
        </li>

        <li class="item-content item-input">
          <div class="item-inner">
            <div class="item-input-wrap">
              <input autocomplete="new-password" class="password optional" placeholder="새 비밀번호 확인" type="password" name="user[password_confirmation]" id="user_password_confirmation">
            </div>
          </div>
        </li>
      </ul>
    </div>

    <input type="submit" name="commit" value="비밀번호 변경" class="btn button button-big button-fill" style="height: 100%;">
	
</form>
</div>

<script>
$(function(){
	$('#menteePassword').attr('class', 'list-button color-gray item-link active');
});
</script>