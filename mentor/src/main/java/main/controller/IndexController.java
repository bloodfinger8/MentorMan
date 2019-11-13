package main.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
@Controller
public class IndexController {
	
	@RequestMapping(value = "/main/index",method=RequestMethod.GET)
	public ModelAndView index() {
		ModelAndView mav=new ModelAndView();
		mav.addObject("display","/template/container.jsp");
		mav.setViewName("/main/index");
		return mav;
	}
	
}
