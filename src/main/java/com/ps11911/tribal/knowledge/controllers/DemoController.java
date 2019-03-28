package com.ps11911.tribal.knowledge.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {
	
	@ResponseBody
	@GetMapping("demo")
	public String demo() {
		return "Hello Spring Boot";
	}
	
	@GetMapping("welcome")
	public String welcome(Model model) {
		model.addAttribute("message", "Welcome to Spring Boot");
		return "welcome";
	}
}
