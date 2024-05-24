package com.example.Library.Managment.System.controller;

import com.example.Library.Managment.System.dto.AddBooksDto;
import com.example.Library.Managment.System.dto.BooksDto;
import com.example.Library.Managment.System.dto.StudentDetailsDto;
import com.example.Library.Managment.System.entities.Books;
import com.example.Library.Managment.System.entities.Category;
import com.example.Library.Managment.System.services.CategoriesService;
import com.example.Library.Managment.System.services.StudentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

class StudentControllerTest {

    @Mock
    private StudentService studentService;

    @Mock
    private CategoriesService categoriesService;

    @InjectMocks
    private StudentController studentController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getAllCategories() {
        List<Category> categories = new ArrayList<>();
        // Add some categories to the list

        when(categoriesService.getAllCategoriesOfBooks()).thenReturn(categories);

        ResponseEntity<List<Category>> responseEntity = studentController.getAllCategories();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(categories, responseEntity.getBody());
    }

    @Test
    void getAllBooksByCategories() {
        List<Books> books = new ArrayList<>();
        // Add some books to the list

        when(categoriesService.getAllBooksByCategories(anyLong())).thenReturn(books);

        ResponseEntity<List<Books>> responseEntity = studentController.getAllBooksByCategories(1L);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(books, responseEntity.getBody());
    }

    @Test
    void addBooks() {
        AddBooksDto addBooksDto = new AddBooksDto();
        // Set up addBooksDto

        when(studentService.addBooks(addBooksDto)).thenReturn(new Books());

        ResponseEntity<Books> responseEntity = studentController.addBooks(addBooksDto);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        // Add more assertions if needed
    }

    @Test
    void removeBooksFromStudent() {
        when(studentService.removeBooksFromStudent(anyLong())).thenReturn(new Books());

        ResponseEntity<Books> responseEntity = studentController.removeBooksFromStudent(1L);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        // Add more assertions if needed
    }

    @Test
    void getStudentDetails() {
        StudentDetailsDto studentDetailsDto = new StudentDetailsDto();
        // Set up studentDetailsDto

        when(studentService.getStudentDetails(anyLong())).thenReturn(studentDetailsDto);

        ResponseEntity<StudentDetailsDto> responseEntity = studentController.getStudentDetails(1L);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(studentDetailsDto, responseEntity.getBody());
    }
}
