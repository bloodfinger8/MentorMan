package menteeboard.dao;

import java.util.List;
import java.util.Map;

import menteeboard.bean.MenteeboardDTO;

public interface MenteeboardDAO {

	public List<MenteeboardDTO> getMenteeboardList(Map<String, Integer> map);

	public int getTotalA();

	public void menteeboardWrite(Map<String, String> map);

	public List<MenteeboardDTO> getMenteeboardListJob(Map<String, Object> map);

	public int getTotalA(String job_code);

	public MenteeboardDTO getMenteeboard(int seq);
}
