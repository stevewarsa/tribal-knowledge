package com.ps11911.tribal.knowledge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ps11911.tribal.knowledge.model.KnowledgebaseEntry;

public interface KnowledgebaseEntryRepository extends JpaRepository<KnowledgebaseEntry, Long> {}