package mentee.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class MenteeDAOMybatis implements MenteeDAO {
	@Autowired
	private SqlSession sqlSession;

	@Override
	public void mentorUserModify(Map<String, String> map) {
		sqlSession.update("menteeSQL.mentorUserModify", map);
	}
}
