package member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/member")
public class MemberController {
	
	@RequestMapping(value = "questioner", method = RequestMethod.GET)
	public String questioner(Model model) {
		
		model.addAttribute("display", "/member/questioner.jsp");
		return "/main/index";
	}
}
