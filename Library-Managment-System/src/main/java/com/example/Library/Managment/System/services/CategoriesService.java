package com.example.Library.Managment.System.services;

import com.example.Library.Managment.System.entities.Books;
import com.example.Library.Managment.System.entities.Category;
import com.example.Library.Managment.System.repositories.BookRepository;
import com.example.Library.Managment.System.repositories.CategoryRepository;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class CategoriesService {
    private final CategoryRepository categoryRepository;
    private final BookRepository bookRepository;

    public CategoriesService(CategoryRepository categoryRepository , BookRepository bookRepository){
        this.categoryRepository = categoryRepository;
        this.bookRepository = bookRepository;
    }

    public List<Category> getAllCategoriesOfBooks(){
        return categoryRepository.findAll();
    }

    public List<Books> getAllBooksByCategories(Long categoryId){
        return bookRepository.findBooksByCategory_CategoryId(categoryId).orElseThrow();
    }
}
