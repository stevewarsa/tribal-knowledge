package com.ps11911.tribal.knowledge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Category {
	@Id
	@Column(length = 50)
	private String categoryCd;
	
	@Column(nullable = false)
	private String categoryNm;
	
	@Column
	private String categoryDs;
	
	@OneToOne(mappedBy = "category")
    private KnowledgebaseEntry knowledgebaseEntry;
	
	public String getCategoryCd() {
		return categoryCd;
	}
	public void setCategoryCd(String categoryCd) {
		this.categoryCd = categoryCd;
	}
	public String getCategoryNm() {
		return categoryNm;
	}
	public void setCategoryNm(String categoryNm) {
		this.categoryNm = categoryNm;
	}
	public String getCategoryDs() {
		return categoryDs;
	}
	public void setCategoryDs(String categoryDs) {
		this.categoryDs = categoryDs;
	}
	public KnowledgebaseEntry getKnowledgebaseEntry() {
		return knowledgebaseEntry;
	}
	public void setKnowledgebaseEntry(KnowledgebaseEntry knowledgebaseEntry) {
		this.knowledgebaseEntry = knowledgebaseEntry;
	}
}
