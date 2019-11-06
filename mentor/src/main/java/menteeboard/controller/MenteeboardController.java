package menteeboard.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;


import menteeboard.bean.MenteeboardDTO;
import menteeboard.bean.MenteeboardPaging;
import menteeboard.service.MenteeboardService;

/**
 * 
 * @Title : 멘티 게시판 구현
 * @author : yangjaewoo
 * @date : 2019. 11. 3.
 */
@Controller
@RequestMapping(value="menteeboard")
public class MenteeboardController {
	
	@Autowired
	private MenteeboardService menteeboardService;
	@Autowired
	private MenteeboardPaging menteeboardPaging;

	@RequestMapping(value = "menteeboardList",method=RequestMethod.GET)
	public String menteeboardList(@RequestParam(required = false, defaultValue = "1") String pg, Model model) {
		model.addAttribute("pg", pg);
	    model.addAttribute("display","/menteeboard/menteeboardList.jsp");
	    return "/main/index";
	}
	
	
	/**
	 * 
	 * @Title : 리스트 출력
	 * @Author : yangjaewoo, @Date : 2019. 11. 5.
	 */
	@RequestMapping(value="getMenteeboardList" , method=RequestMethod.POST)
	public ModelAndView getMenteeboardList(@RequestParam String pg,
			 							   				 HttpSession session,
			 							   				 HttpServletResponse response) {
		
		int endNum = Integer.parseInt(pg) * 5; //한페이지당 5개
		int startNum = endNum - 4;
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("startNum", startNum);
		map.put("endNum", endNum);
		
		List<MenteeboardDTO> list = menteeboardService.getMenteeboardList(map);

		
		int totalA = menteeboardService.getTotalA();
		menteeboardPaging.setCurrentPage(Integer.parseInt(pg));
		menteeboardPaging.setPageBlock(3);
		menteeboardPaging.setPageSize(5);
		menteeboardPaging.setTotalA(totalA);
		menteeboardPaging.makePagingHTML();
		
		
//		String memId = (String)session.getAttribute("memId");
		
		//조회수(쿠키 생성) 
//		if(memId != null) {
//			Cookie cookie = new Cookie("memHit","0");
//			cookie.setMaxAge(60*60*24);
//			response.addCookie(cookie);
//		}
		
		ModelAndView mav=new ModelAndView();
//		mav.addObject("memId" , memId);
		mav.addObject("list", list);
		mav.addObject("menteeboardPaging", menteeboardPaging);
		mav.setViewName("jsonView");
		return mav;
	}
	
	@RequestMapping(value="menteeboardWriteForm" , method=RequestMethod.GET)
	public ModelAndView menteeboardWriteForm() {
		ModelAndView mav = new ModelAndView();
		mav.addObject("display","/menteeboard/menteeboardWriteForm.jsp");
		mav.setViewName("/main/index");
		return mav;
	}
	
	/**
	 * 
	 * @Title : 글작성 메소드
	 * @Author : yangjaewoo, @Date : 2019. 11. 5.
	 */
	@RequestMapping(value="menteeboardWrite" , method=RequestMethod.POST)
	@ResponseBody
	public void boardWrite(@RequestParam Map<String, String> map,
							HttpSession session) {
		
//		String id = (String)session.getAttribute("memId");
//		String name =(String)session.getAttribute("memName");
//		String email = (String)session.getAttribute("memEmail");
		String id = "didwodn82";
		String name = "양재우";
		String email = "didwodn82@naver.com";
		
		map.put("id", id);
		map.put("name", name);
		map.put("email", email);
		
		menteeboardService.menteeboardWrite(map);
	}
	
	/**
	 * 
	 * @Title : 썸머노트 이미지 업로드시 사용하는 메소드
	 * @Author : yangjaewoo, @Date : 2019. 11. 5.
	 */
	@RequestMapping(value = "menteeboardImage", method = RequestMethod.POST)
	@ResponseBody
	   public String noticeboardImage(@RequestParam("file") MultipartFile file) {
	      String filePath = "/Users/yangjaewoo/MentorMan/mentor/src/main/webapp/storage";
	      String fileName = file.getOriginalFilename();
	      File files = new File(filePath, fileName);
	      
	      System.out.println(fileName);
	      try {
	         FileCopyUtils.copy(file.getInputStream(), new FileOutputStream(files));
	      } catch (IOException e) {
	         e.printStackTrace();
	      }
	      
	      return fileName;
	   }
	
	
	/**
	 * 
	 * @Title : 직무유형 변경되었을때 사용되는 메소드
	 * @Author : yangjaewoo, @Date : 2019. 11. 5.
	 */
	@RequestMapping(value = "getMenteeboardListJob", method = RequestMethod.GET)
	public ModelAndView getMenteeboardListJob(@RequestParam String pg,
											  @RequestParam String job_code) {
		
		int endNum = Integer.parseInt(pg) * 5; //한페이지당 5개
		int startNum = endNum - 4;
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("startNum", startNum);
		map.put("endNum", endNum);
		map.put("job_code", job_code);
		
		List<MenteeboardDTO> list = menteeboardService.getMenteeboardListJob(map);
		
		int totalAJob = menteeboardService.getTotalAJob(job_code);
		menteeboardPaging.setCurrentPage(Integer.parseInt(pg));
		menteeboardPaging.setPageBlock(3);
		menteeboardPaging.setPageSize(5);
		menteeboardPaging.setTotalA(totalAJob);
		menteeboardPaging.makeJobPagingHTML(job_code);
		
		ModelAndView mav=new ModelAndView();
		mav.addObject("list", list);
		mav.addObject("menteeboardPaging", menteeboardPaging);
		mav.setViewName("jsonView");
		return mav;
	}
	
	
	@RequestMapping(value="menteeboardView" , method=RequestMethod.GET)
	public ModelAndView boarView(@RequestParam String seq,
								 @RequestParam String pg,
								 HttpSession session,
								 HttpServletRequest request,
								 HttpServletResponse response
								 ){
		
		//쿠키조회
//		Cookie[] getCookie = request.getCookies();
//		if(getCookie != null) {
//			for(int i =0; i<getCookie.length; i++){
//				if(getCookie[i].getName().equals("memHit")){
//					//hit + 1
//					//boardDAO.boardHit(seq);
//					boardService.boardHit(Integer.parseInt(seq));
//					
//					getCookie[i].setMaxAge(0);
//					response.addCookie(getCookie[i]);
//				}
//			}
//		}
		MenteeboardDTO menteeboardDTO= menteeboardService.getMenteeboard(Integer.parseInt(seq));
		
//		String id = (String) session.getAttribute("memId");
		String id = "didwodn82";
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("memId" , id);
		mav.addObject("seq" , Integer.parseInt(seq));
		mav.addObject("pg" , Integer.parseInt(pg));
		mav.addObject("menteeboardDTO", menteeboardDTO);
		mav.addObject("display","/menteeboard/menteeboardView.jsp");
		mav.setViewName("/main/index");
		return mav;
	}
	
	
	
	
	
}
