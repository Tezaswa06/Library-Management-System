package com.example.Library.Managment.System.services;

import com.example.Library.Managment.System.dto.AddBooksDto;
import com.example.Library.Managment.System.dto.BooksDto;
import com.example.Library.Managment.System.dto.StudentDetailsDto;
import com.example.Library.Managment.System.entities.Books;
import com.example.Library.Managment.System.entities.Student;
import com.example.Library.Managment.System.repositories.BookRepository;
import com.example.Library.Managment.System.repositories.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final BookRepository bookRepository;
    private StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository, BookRepository bookRepository) {
        this.studentRepository = studentRepository;
        this.bookRepository = bookRepository;
    }

    public Books addBooks(AddBooksDto addBooksDto){
        Books books = bookRepository.findById(addBooksDto.getBookId()).orElseThrow();
        Student student = studentRepository.findById(addBooksDto.getStudentId()).orElseThrow();
        books.setStudent(student);
        bookRepository.save(books);
        return books;
    }

    public Books removeBooksFromStudent( Long bookId){
        Books books = bookRepository.findById(bookId).orElseThrow();
        books.setStudent(null);
        bookRepository.save(books);
        return books;
    }

    public StudentDetailsDto getStudentDetails(Long studentId){
        Student student = studentRepository.findById(studentId).orElseThrow();
        StudentDetailsDto studentDetailsDto = new StudentDetailsDto();
        studentDetailsDto.setStudentname(student.getStudentname());
        studentDetailsDto.setStudemail(student.getStudemail());
        studentDetailsDto.setBooks(student.getBooks());
        return studentDetailsDto;
    }

}
