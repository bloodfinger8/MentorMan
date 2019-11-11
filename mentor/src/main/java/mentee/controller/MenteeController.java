package mentee.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import mentee.service.MenteeService;

@Controller
@RequestMapping("/mentee")
public class MenteeController {
	@Autowired
	private MenteeService menteeService;
	
	@RequestMapping(value = "menteeUserForm", method = RequestMethod.GET)
	public ModelAndView menteeWriteForm(Model model) { //세션으로 값을 뿌려줘야됨
		ModelAndView mav = new ModelAndView();
		//menberDTO = menteeService.menteeUserForm();
		mav.addObject("display", "/mentee/menteeUserForm.jsp");
		mav.addObject("display2", "/mentee/menteeUserSetting.jsp");
		mav.setViewName("/main/index");
		return mav;
	}
	
	@RequestMapping(value = "menteeStudentProfile", method = RequestMethod.GET)
	public String menteeStudentProfile(Model model) {
		
		model.addAttribute("display","/mentee/menteeUserForm.jsp");
		model.addAttribute("display2","/mentee/menteeStudentProfile.jsp");
		return "/main/index";
	}
	
	@RequestMapping(value = "menteeEmployeeProfile", method = RequestMethod.GET)
	public String menteeEmployeeProfile(Model model) {
		model.addAttribute("display", "/mentee/menteeUserForm.jsp");
		model.addAttribute("display2","/mentee/menteeEmployeeProfile.jsp");
		return "/main/index";
	}
	@RequestMapping(value = "menteePassword", method = RequestMethod.GET)
	public String menteePassword(Model model) {
		model.addAttribute("display", "/mentee/menteeUserForm.jsp");
		model.addAttribute("display2","/mentee/menteePassword.jsp");
		return "/main/index";
	}
	@RequestMapping(value = "mentorUserModify", method = RequestMethod.POST)
	public String mentorUserModify(@RequestParam Map<String, String> map, @RequestParam("member_profile") MultipartFile member_profile, Model model) {
		String filePath = "C:/github/MentorMan/mentor/src/main/webapp/storage/"+"kujun95@naver.com";
		String fileName = member_profile.getOriginalFilename();
		File filemake = new File(filePath);
		if(!filemake.exists()) {
			filemake.mkdirs();
		}
		File file = new File(filePath, fileName);
		try {
			FileCopyUtils.copy(member_profile.getInputStream(), new FileOutputStream(file));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		map.put("member_profile", fileName);
		menteeService.mentorUserModify(map);
		System.out.println(map);
		model.addAttribute("display","/mentee/menteeUserForm.jsp");
		model.addAttribute("display2","/mentee/menteeUserSetting.jsp");
		return "/main/index";
	}
	
}
