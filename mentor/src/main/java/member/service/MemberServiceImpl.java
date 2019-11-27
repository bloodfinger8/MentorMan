package member.service;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import member.bean.AlarmDTO;
import member.bean.MemberDTO;
import member.dao.MemberDAO;
import mentee.bean.MenteeDTO;
import mentor.bean.MentorDTO;
/**
 * @Title : 회원가입 Service.
 * @author : ginkgo1928
 * @date : 2019. 11. 5.
 */
@Service(value="memberService")
public class MemberServiceImpl implements MemberService {
	@Autowired 
	private MemberDAO memberDAO;
	
	
	/** @Title : 닉네임 중복확인.
	 * @author : ginkgo1928 @date : 2019. 11. 5.*/
	@Override
	public MemberDTO writeNicknamecheck(String member_nickname) {
		return memberDAO.writeNicknamecheck(member_nickname);
	}
	
	/** @Title : 이메일 중복확인
	 * @author : ginkgo1928  @date : 2019. 11. 5.*/
	@Override
	public MemberDTO writeEmailCheck(String member_email) {
		return memberDAO.writeEmailCheck(member_email);
	}
	
	/* 회원가입 완료 */
	@Override
	public void write(Map<String, String> map) {
		memberDAO.write(map);
	}
	
	/* 로그인 */
	@Override
	public MemberDTO login(Map<String, String> map) {
		return memberDAO.login(map);
	}
	/* 나의 질문 답변 */
	@Override
	public List<MentorDTO> getQandA(Map<String, String> map) {
		return memberDAO.getQandA(map);
	}
	
	/* 비밀번호 찾기 */
	@Override
	public MemberDTO setmemberpwd(Map<String, String> map) {
		return memberDAO.setsetmemberpwd(map);
	}
	
	/** @Title : 이메일 인증을 하고 새로운 비밀번호로 변경
	 * @author : ginkgo1928
	 * @date : 2019. 11. 13. */
	@Override
	public MemberDTO newPwdCommit(Map<String, String> map) {
		return memberDAO.newPwdCommit(map);
	}
	
	/**
	 * Q&A페이징
	 */
	@Override
	public int getTotalA(String member_email) {
		return memberDAO.getTotalA(member_email);
	}
	
	/**
	 * Q&A 멘토 정도 및 질문 내용
	 */
	@Override
	public MentorDTO getMentor_info(Map<String, String> map) {
		return memberDAO.getMentor_info(map);
	}
	
	/**
	 * 멘토링 정보 꺼내옴
	 */
	@Override
	public List<MentorDTO> getMentoring_type(Map<String, String[]> arrayMap) {
		return memberDAO.getMentoring_type(arrayMap);
	}
	//질문 지우기
	@Override
	public void questionDelete(int question_seq) {
		memberDAO.questionDelete(question_seq);
	}
	//멘토의 seq
	@Override
	public int getMentor_seq(String member_email) {
		return memberDAO.getMentor_seq(member_email);
	}
	//로그인 한 사람이 멘토인지 확인
	@Override
	public int getMember_flag(String member_email) {
		return memberDAO.getMember_flag(member_email);
	}
	
	//로그인 한 사람의 글이 맞는지 확인
	@Override
	public List<MentorDTO> getMemtee_question(int mentor_seq) {
		return memberDAO.getMemtee_question(mentor_seq);
	}
	//질문을 한 사람의 이메일 가져옴
	@Override
	public String getMember_email(int qsseq) {
		return memberDAO.getMember_email(qsseq);
	}
	//답변 저장
	@Override
	public void answerSave(Map<String, String> map) {
		memberDAO.answerSave(map);
	}
	//답변 가져오기
	@Override
	public MentorDTO getMentor_auswer(int qsseq) {
		return memberDAO.getMentor_auswer(qsseq);
	}
	
	@Override
	public void answerModify(Map<String, String> map) {
		memberDAO.answerModify(map);
	}

	@Override
	public List<AlarmDTO> getAlarm(String memEmail) {
		return memberDAO.getAlarm(memEmail);
	}
	@Override
	public void checkSubscribe(String memEmail) {
		memberDAO.checkSubscribe(memEmail);
	}

	@Override
	public void saveAlarm(Map<String, String> map) {
		memberDAO.saveAlarm(map);
	}

	@Override
	public void deleteAlarm(int seq) {
		memberDAO.deleteAlarm(seq);
	}

	
}

	

	


	

	