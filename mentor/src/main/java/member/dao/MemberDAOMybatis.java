package member.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import member.bean.MemberDTO;
import mentor.bean.MentorDTO;

@Repository("memberDAO")
@Transactional
/**
 * @Title : MemberDAO클래스
 * @author : ginkgo1928
 * @date : 2019. 11. 5.
 */
public class MemberDAOMybatis implements MemberDAO {
	@Autowired
	private MemberDTO memberDTO;
	
	@Autowired
	private SqlSession sqlSession;
	
	/** @Title : 닉네임 중복확인
 	   @author : ginkgo1928  @date : 2019. 11. 5.*/
	@Override
	public MemberDTO writeNicknamecheck(String member_nickname) {
		return sqlSession.selectOne("memberSQL.writeNicknamecheck", member_nickname);
	}
	
	/** @Title : 이름 중복확인
	 * @author : ginkgo1928  @date : 2019. 11. 5.*/
	@Override
	public MemberDTO writeEmailCheck(String member_email) {
		return sqlSession.selectOne("memberSQL.writeEmailCheck", member_email);
	}
	
	/** @Title : 회원가입 처리
	 * @author : ginkgo1928 @date : 2019. 11. 5.*/
	@Override
	public void write(Map<String, String> map) {
		sqlSession.insert("memberSQL.write",map);
	}
	
	/** @Title : 로그인 처리
	 * @author : ginkgo1928  @date : 2019. 11. 5.*/
	@Override
	public MemberDTO login(Map<String, String> map) {
		memberDTO=sqlSession.selectOne("memberSQL.login",map);
		return  memberDTO;
	}
	/**
	 *  질문 리스트
	 */
	@Override
	public List<MentorDTO> getQandA(Map<String, String> map) {
		return sqlSession.selectList("memberSQL.getQandA", map);
	}
	
	/** @Title : 비밀번호 설정
	 * @author : ginkgo1928  @date : 2019. 11. 12.*/
	@Override
	public MemberDTO setsetmemberpwd(Map<String, String> map) {
		memberDTO=sqlSession.selectOne("memberSQL.setsetmemberpwd",map);
		return memberDTO;
	}
	/** @Title : 비밀번호 변경
	 * @author : ginkgo1928  @date : 2019. 11. 12.*/
	@Override
	public MemberDTO newPwdCommit(Map<String, String> map) {
		sqlSession.update("memberSQL.newPwdCommit", map);
		return memberDTO;
	}
	
	/**
	 * Q&A 페이징
	 */
	@Override
	public int getTotalA(String member_email) {
		return sqlSession.selectOne("memberSQL.getTotalA", member_email);
	}
	
	@Override
	public MentorDTO getMentor_info(Map<String, String> map) {
		return sqlSession.selectOne("memberSQL.getMentor_info", map);
	}

	@Override
	public List<MentorDTO> getMentoring_type(Map<String, String[]> arrayMap) {
		return sqlSession.selectList("memberSQL.getMentoring_type", arrayMap);
	}

	@Override
	public void questionDelete(int question_seq) {
		sqlSession.delete("memberSQL.questionDelete",question_seq);
	}

}
