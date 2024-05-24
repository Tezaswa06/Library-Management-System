package com.example.Library.Managment.System.services;

import com.example.Library.Managment.System.dto.LoginRequest;
import com.example.Library.Managment.System.dto.LoginResponse;
import com.example.Library.Managment.System.dto.RegisterRequest;
import com.example.Library.Managment.System.entities.Student;
import com.example.Library.Managment.System.repositories.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthenticationService {

    private final StudentRepository studentRepository;

    public AuthenticationService(StudentRepository studentRepository){
        this.studentRepository = studentRepository;
    }

    public String registerStudent(RegisterRequest registerRequest){
        Optional<Student> student = studentRepository.findStudentByStudemail(registerRequest.getEmail());

        if(student.isPresent()){
            return "Already Registered";
        }
        Student student1 = new Student();
        student1.setStudemail(registerRequest.getEmail());
        student1.setPassword(registerRequest.getPassword());
        student1.setStudentname(registerRequest.getStudentname());
        student1.setRollnumber(registerRequest.getRollnumber());

        studentRepository.save(student1);

        return "Student registered successfully";
    }

    public LoginResponse loginStudent(LoginRequest loginRequest) {
        Optional<Student> student = studentRepository.findStudentByStudemail(loginRequest.getStudemail());
        if (student.isPresent()) {
            Student student1 = student.get();
            if (student1.getPassword().equals(loginRequest.getPassword())) {
                return new LoginResponse("Login Successful", student1.getId());
            } else {
                return new LoginResponse("Incorrect Password", null);
            }
        }
        return new LoginResponse("Student Does Not Exist", null);
    }
}
