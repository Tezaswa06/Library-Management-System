package com.example.Library.Managment.System.controller;

import com.example.Library.Managment.System.dto.AddBooksDto;
import com.example.Library.Managment.System.dto.BooksDto;
import com.example.Library.Managment.System.dto.StudentDetailsDto;
import com.example.Library.Managment.System.entities.Books;
import com.example.Library.Managment.System.entities.Category;
import com.example.Library.Managment.System.entities.Student;
import com.example.Library.Managment.System.repositories.StudentRepository;
import com.example.Library.Managment.System.services.CategoriesService;
import com.example.Library.Managment.System.services.StudentService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "api/student")
public class StudentController {
    private final StudentService studentService;
    private final CategoriesService categoriesService;


    public StudentController(StudentService studentService,CategoriesService categoriesService) {
        this.studentService = studentService;
        this.categoriesService = categoriesService;

    }
    @GetMapping(path = "/getAllCategoriesOfBooks")
    public ResponseEntity<List<Category>> getAllCategories(){
        List<Category> categories = categoriesService.getAllCategoriesOfBooks();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @GetMapping(path = "/getAllBooksByCategories/{categoryId}")
    public ResponseEntity<List<Books>> getAllBooksByCategories(@PathVariable Long categoryId){
        List<Books> books = categoriesService.getAllBooksByCategories(categoryId);
        return new ResponseEntity<>(books,HttpStatus.OK);
    }

    @PostMapping(path = "/addBooks")
    public ResponseEntity<Books> addBooks(@RequestBody AddBooksDto addBooksDto){
        return new ResponseEntity<>(studentService.addBooks(addBooksDto),HttpStatus.OK);
    }

    @DeleteMapping(path = "/removeBooksFromStudent/{bookId}")
    public ResponseEntity<Books> removeBooksFromStudent( @PathVariable Long bookId){
        return new ResponseEntity<>(this.studentService.removeBooksFromStudent(bookId),HttpStatus.OK);
    }

    @GetMapping(path = "/getStudentDetails/{studentId}")
    public ResponseEntity<StudentDetailsDto> getStudentDetails(@PathVariable Long studentId){
        StudentDetailsDto studentDetailsDto = studentService.getStudentDetails(studentId);
        return new ResponseEntity<>(studentDetailsDto,HttpStatus.OK);
    }
}

