package com.ps11911.tribal.knowledge.repository;

import org.springframework.data.repository.CrudRepository;

import com.ps11911.tribal.knowledge.model.KnowledgebaseEntry;

public interface KnowledgebaseEntryRepository extends CrudRepository<KnowledgebaseEntry, Long> {}