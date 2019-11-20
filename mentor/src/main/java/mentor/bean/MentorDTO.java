package mentor.bean;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class MentorDTO {
	private int mentor_seq;
	private String mentor_company;
	private String mentor_department;
	private String mentor_position;
	private String job_code;
	private String mentor_school;
	private String mentor_career;
	private String mentoring_code;
	private String mentor_tel;
	private String mentor_represent;
	private String mentor_info;
	private String mentor_etc;
	private String mentor_email;
	private String mentor_selectNaming;
	private String mentor_businesscard;
	private int mentor_badge;
	private int mentor_flag;
	
	
	//---join 멘토 찾기-------------------------
	private String mentoring_type;
	private String member_name;
	private String member_profile;
	private String job_type;
	
	//---join 질문 답변-------------------------
	private String question_title;
	private String question_content;
	private int question_flag;
	private int question_seq;
}
