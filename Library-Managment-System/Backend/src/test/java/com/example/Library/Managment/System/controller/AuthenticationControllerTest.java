package com.example.Library.Managment.System.controller;

import com.example.Library.Managment.System.dto.LoginRequest;
import com.example.Library.Managment.System.dto.LoginResponse;
import com.example.Library.Managment.System.dto.RegisterRequest;
import com.example.Library.Managment.System.services.AuthenticationService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class AuthenticationControllerTest {

    @Mock
    private AuthenticationService authenticationService;

    @InjectMocks
    private AuthenticationController authenticationController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void registerStudent() {
        RegisterRequest registerRequest = new RegisterRequest("John Doe", "12345", "john@example.com", "password");

        when(authenticationService.registerStudent(registerRequest)).thenReturn("Student registered successfully");

        ResponseEntity<String> responseEntity = authenticationController.registerStudent(registerRequest);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Student registered successfully", responseEntity.getBody());
    }

    @Test
    void loginStudent() {
        LoginRequest loginRequest = new LoginRequest("john@example.com", "password");
        LoginResponse loginResponse = new LoginResponse("Login Successful", 1L);

        when(authenticationService.loginStudent(any(LoginRequest.class))).thenReturn(loginResponse);

        ResponseEntity<LoginResponse> responseEntity = authenticationController.loginStudent(loginRequest);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(loginResponse, responseEntity.getBody());
    }
}
