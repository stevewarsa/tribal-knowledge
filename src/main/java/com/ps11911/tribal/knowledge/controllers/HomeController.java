package com.ps11911.tribal.knowledge.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {
	
	@GetMapping
	public String home(Model model) {
		return "forward:/index.html";
	}
//	
//	@GetMapping("welcome")
//	public String welcome(Model model) {
//		model.addAttribute("message", "Welcome to Spring Boot");
//		return "welcome";
//	}
}
