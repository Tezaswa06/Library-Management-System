package com.example.Library.Managment.System.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    private String studemail;
    private String password;
    private String studentId;


    public LoginRequest(String loginSuccessful, Long id) {

    }
}
