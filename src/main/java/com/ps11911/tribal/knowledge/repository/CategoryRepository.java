package com.ps11911.tribal.knowledge.repository;

import org.springframework.data.repository.CrudRepository;

import com.ps11911.tribal.knowledge.model.Category;

public interface CategoryRepository extends CrudRepository<Category, String> {}