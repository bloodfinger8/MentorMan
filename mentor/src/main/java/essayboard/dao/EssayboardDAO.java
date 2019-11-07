package essayboard.dao;

import java.util.List;
import java.util.Map;

import essayboard.bean.EssayboardDTO;

public interface EssayboardDAO {
	
	//에세이 멘토 리스트 출력
	public List<EssayboardDTO> essayboardList(Map<String, Integer> map);
	
	//에세이 글쓰기
	public void essayboardWrite(Map<String, Object> map);
	
	// 에세이 직무 유형
	public List<EssayboardDTO> essayjobType(String jobType);
	
	// 에세이 총 글 수
	public int getTotalA(Map<String, Integer> map);

}
