package mentorapply.dao;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public class MentorapplyDAOMybatis implements MentorapplyDAO {
	@Autowired 
	private SqlSession sqlSession;

	@Override
	public void mentorapplyWrite(Map<String, String> map) {
		sqlSession.insert("applySQL.mentorapplyWrite", map);
	}
}
