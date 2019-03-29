package com.ps11911.tribal.knowledge.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ps11911.tribal.knowledge.model.User;

@RestController
@RequestMapping("/api/v1")
public class TestRestController {

	@GetMapping("/users")
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<User>();
		User user = new User();
		user.setUserId("steve");
		user.setPassword("blahblah");
		users.add(user);
		return users;
	}
}