package com.ps11911.tribal.knowledge.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ps11911.tribal.knowledge.model.Category;
import com.ps11911.tribal.knowledge.model.KnowledgebaseEntry;
import com.ps11911.tribal.knowledge.repository.CategoryRepository;
import com.ps11911.tribal.knowledge.repository.KnowledgebaseEntryRepository;

@RestController
@RequestMapping("/api/v1")
public class KnowledgebaseController {
	@Autowired
	private KnowledgebaseEntryRepository knowledgebaseEntryRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@GetMapping("/kbentries")
	public @ResponseBody List<KnowledgebaseEntry> getAllKbEntries() {
		return knowledgebaseEntryRepository.findAll();
	}
	
	@GetMapping("/categories")
	public @ResponseBody List<Category> getAllCategories() {
		return categoryRepository.findAll();
	}
	
	@PostMapping("/addkbentry")
	public @ResponseBody KnowledgebaseEntry addNewKnowledgebaseEntry(@RequestBody KnowledgebaseEntry entry) {
		categoryRepository.save(entry.getCategory());
		return knowledgebaseEntryRepository.save(entry);
	}
}
