package essayboard.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import essayboard.bean.EssayboardDTO;

@Repository
public class EssayboardDAOImpl implements EssayboardDAO {
	@Autowired
	private SqlSession sqlSession;
	
//	//에세이 멘토 리스트 출력
//	@Override
//	public List<EssayboardDTO> essayboardList() {
//		return sqlSession.selectList("essaySQL.essayboardList");
//	}
	
	//에세이 멘토 리스트 출력
	@Override
	public List<EssayboardDTO> essayboardList(Map<String, Integer> map) {
		return sqlSession.selectList("essaySQL.essayboardList", map);
	}
	
	//에세이 글쓰기
	@Override
	public void essayboardWrite(Map<String, Object> map) {
		sqlSession.insert("essaySQL.essayboardWrite", map);	
	}
	
	// 에세이 직무 유형
	@Override
	public List<EssayboardDTO> essayjobType(String jobType) {
		return sqlSession.selectList("essaySQL.essayjobType", jobType);
	}
	
	// 에세이 총 글 수
	@Override
	public int getTotalA(Map<String, Integer> map) {
		return sqlSession.selectOne("essaySQL.getTotalA", map);
	}
}
