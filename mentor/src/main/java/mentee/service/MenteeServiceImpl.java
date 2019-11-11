package mentee.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import mentee.dao.MenteeDAO;

@Service
public class MenteeServiceImpl implements MenteeService {
	@Autowired
	private MenteeDAO menteeDAO;

	@Override
	public void mentorUserModify(Map<String, String> map) {
		menteeDAO.mentorUserModify(map);
	}

}
