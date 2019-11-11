package mentorapply.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import mentorapply.bean.MentorapplyDTO;
import mentorapply.service.MentorapplyService;

@Controller
@RequestMapping("/mentorapply")
public class MentorapplyController {
	@Autowired 
	private MentorapplyService mentorapplyService;
	
	@RequestMapping(value = "mentorapplyForm", method = RequestMethod.GET)
	public String mentorapplyForm(Model model) {
		model.addAttribute("display", "/mentorapply/mentorapplyForm.jsp");
		return "/main/index";
	}
	
	@RequestMapping(value = "mentorapplyWriteForm", method = RequestMethod.POST)
	public String mentorapplyStart(@RequestParam String mentor_company, @RequestParam String mentor_department, @RequestParam String mentor_position, Model model) {
		
		model.addAttribute("mentor_company", mentor_company);
		model.addAttribute("mentor_department", mentor_department);
		model.addAttribute("mentor_position", mentor_position);
		model.addAttribute("display", "/mentorapply/mentorapplyWriteForm.jsp");
		return "/main/index";
	}

	@RequestMapping(value = "mentorapplyWrite", method = RequestMethod.POST)
	public String mentorapply(@RequestParam Map<String, String> map, @RequestParam("mentoring_code") String mentoring_code,@RequestParam("mentor_businesscard") MultipartFile mentor_businesscard, Model model) {
		map.put("mentoring_code", mentoring_code);
		System.out.println(map);
		String filePath = "C:/github/MentorMan/mentor/src/main/webapp/storage/"+"kujun95@naver.com";
		String fileName = mentor_businesscard.getOriginalFilename();
		File filemake = new File(filePath);
		if(!filemake.exists()) {
			filemake.mkdirs();
		}
		File file = new File(filePath, fileName);
		try {
			FileCopyUtils.copy(mentor_businesscard.getInputStream(), new FileOutputStream(file));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		map.put("mentor_businesscard",fileName);
		mentorapplyService.mentorapplyWrite(map);
		model.addAttribute("display", "/mentorapply/mentorapplyWrite.jsp");
		return "/main/index";
	}
}
