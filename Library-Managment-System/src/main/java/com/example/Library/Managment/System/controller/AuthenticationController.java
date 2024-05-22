package com.example.Library.Managment.System.controller;

import com.example.Library.Managment.System.dto.LoginRequest;
import com.example.Library.Managment.System.dto.RegisterRequest;
import com.example.Library.Managment.System.entities.Student;
import com.example.Library.Managment.System.services.AuthenticationService;
import com.example.Library.Managment.System.services.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthenticationController {

    private AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService){
        this.authenticationService = authenticationService;
    }

    @PostMapping("/registerStudent")
    public ResponseEntity<String> registerStudent(@RequestBody RegisterRequest registerRequest){
        return new ResponseEntity<>(authenticationService.registerStudent(registerRequest), HttpStatus.OK);
    }

    @PostMapping("/loginStudent")
    public ResponseEntity<LoginRequest> loginStudent(@RequestBody LoginRequest loginRequest) {
        LoginRequest loginStudent = authenticationService.loginStudent(loginRequest);
        HttpStatus status = loginStudent.getStudentId() != null ? HttpStatus.OK : HttpStatus.UNAUTHORIZED;
        return new ResponseEntity<>(loginRequest, status);
    }
}
