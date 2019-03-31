package com.ps11911.tribal.knowledge.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ps11911.tribal.knowledge.model.Category;

public interface CategoryRepository extends JpaRepository<Category, String> {}