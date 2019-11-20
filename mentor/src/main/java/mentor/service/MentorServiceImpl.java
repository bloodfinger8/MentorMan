package mentor.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mentor.bean.MentorDTO;
import mentor.dao.MentorDAO;

@Service
public class MentorServiceImpl implements MentorService{
	@Autowired 
	private MentorDAO mentorDAO;

	@Override
	public void mentorapplyWrite(Map<String, String> map) {
		mentorDAO.mentorapplyWrite(map);
	}

	@Override
	public MentorDTO getEmail(String member_email) {
		return mentorDAO.getEmail(member_email);
	}
	
	@Override
	public List<MentorDTO> getMentorList(Map<String, String> map) {
		return mentorDAO.getMentorList(map);
	}
	@Override
	public int getTotalA(int mentor_flag) {
		return mentorDAO.getTotal(mentor_flag);
	}
	@Override
	public MentorDTO getMentor_info(int seq) {
		return mentorDAO.getMentor_info(seq);
	}

	@Override
	public List<MentorDTO> getMentoring_code(Map<String, String[]> map) {
		return mentorDAO.getMentoring_code(map);
	}

	@Override
	public void mentorQuestionsSuccess(Map<String, String> map) {
		mentorDAO.mentorQuestionsSuccess(map);
	}

	@Override
	public MentorDTO getQuestion_flag(Map<String, String> flagCheck_map) {
		return mentorDAO.getQuestion_flag(flagCheck_map);
	}

	@Override
	public MentorDTO questionModifyForm(int qsseq) {
		return mentorDAO.questionModifyForm(qsseq);
	}

	@Override
	public int questionModify(Map<String, String> map) {
		return mentorDAO.questionModify(map);
	}

}
