package com.example.Library.Managment.System.extras;

import com.example.Library.Managment.System.dto.BooksDto;
import com.example.Library.Managment.System.dto.CategoryDto;
import com.example.Library.Managment.System.dto.StudentDto;
import com.example.Library.Managment.System.entities.Books;
import com.example.Library.Managment.System.entities.Category;
import com.example.Library.Managment.System.entities.Student;
import com.example.Library.Managment.System.extras.dto.StartupDto;
import com.example.Library.Managment.System.repositories.BookRepository;
import com.example.Library.Managment.System.repositories.CategoryRepository;
import com.example.Library.Managment.System.repositories.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuxService {

    private final BookRepository bookRepository;
    private final StudentRepository studentRepository;;
    private final CategoryRepository categoryRepository;;

    public AuxService(BookRepository bookRepository, StudentRepository studentRepository, CategoryRepository categoryRepository) {
        this.bookRepository = bookRepository;
        this.studentRepository = studentRepository;
        this.categoryRepository = categoryRepository;

    }

    private void addBooks(List<BooksDto> booksDtos){
        booksDtos.forEach(booksDto -> {
            Books books = new Books();
            books.setBookname(booksDto.getBookName());
            books.setBookAuthor(booksDto.getAuthorName());
            Category category = categoryRepository.findById(booksDto.getCategoryId()).orElseThrow();
            books.setCategory(category);
            bookRepository.save(books);
        });
    }

    private void addStudents(List<StudentDto> studentDtos){
        studentDtos.forEach(studentDto -> {
            Student student = new Student();
            student.setStudentname(studentDto.getStudentName());
            student.setStudemail(studentDto.getStudemail());
            studentRepository.save(student);
        });
    }

    private void addCategories(List<CategoryDto> categoryDtos){
        categoryDtos.forEach(categoryDto -> {
            Category category = new Category();
            category.setCategoryname(categoryDto.getCategoryName());
            categoryRepository.save(category);
        });
    }
    public void startup(StartupDto startupDto){
        this.addCategories(startupDto.getCategories());
        this.addBooks(startupDto.getBooks());
        this.addStudents(startupDto.getStudents());
    }
}
