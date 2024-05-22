package com.example.Library.Managment.System.repositories;

import com.example.Library.Managment.System.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category , Long> {
}
