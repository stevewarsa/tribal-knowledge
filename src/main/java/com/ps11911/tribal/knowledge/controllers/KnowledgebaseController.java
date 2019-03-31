package com.ps11911.tribal.knowledge.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ps11911.tribal.knowledge.model.KnowledgebaseEntry;
import com.ps11911.tribal.knowledge.model.User;
import com.ps11911.tribal.knowledge.repository.KnowledgebaseEntryRepository;

@RestController
@RequestMapping("/api/v1")
public class KnowledgebaseController {
	@Autowired
	private KnowledgebaseEntryRepository knowledgebaseEntryRepository;
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		@SuppressWarnings("serial")
		List<User> users = new ArrayList<User>() {{
			add(new User("Steve", "mypwd123"));
			add(new User("Fred", "hispwd123"));
			add(new User("Jack", "jackspwd123"));
		}};
		return users;
	}
	@GetMapping("/kbentries")
	public @ResponseBody Iterable<KnowledgebaseEntry> getAllKbEntries() {
		return knowledgebaseEntryRepository.findAll();
	}
	
	@PostMapping("/addkbentry")
	public @ResponseBody KnowledgebaseEntry addNewKnowledgebaseEntry(@RequestBody KnowledgebaseEntry entry) {
		return knowledgebaseEntryRepository.save(entry);
	}
}
