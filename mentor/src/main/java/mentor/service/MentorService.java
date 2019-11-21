package mentor.service;

import java.util.List;
import java.util.Map;

import mentee.bean.MenteeDTO;
import mentor.bean.MentorDTO;
import mentor.bean.MentorFollowDTO;

public interface MentorService {

	public void mentorapplyWrite(Map<String, String> map);

	public MentorDTO getEmail(String member_email);
	
	public List<MentorDTO> getMentorList(Map<String, String> map);

	public int getTotalA(int mentor_flag);

	public MentorDTO getMentor_info(int seq);

	public List<MentorDTO> getMentoring_code(Map<String, String[]> map);

	public void mentorQuestionsSuccess(Map<String, String> map);

	public MentorDTO getQuestion_flag(Map<String, String> flagCheck_map);

	public MentorDTO questionModifyForm(int qsseq);

	public int questionModify(Map<String, String> map);

	public int getFollowCheck(Map<String, String> followMap);

	public void mentorFollowInsert(MentorFollowDTO mentorFollowDTO);

	public void mentorFollowDelete(MentorFollowDTO mentorFollowDTO);

	public List<MentorDTO> getMentorAttentionList(int mentor_flag);

}
