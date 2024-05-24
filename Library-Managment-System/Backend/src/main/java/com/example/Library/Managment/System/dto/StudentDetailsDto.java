package com.example.Library.Managment.System.dto;

import com.example.Library.Managment.System.entities.Books;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StudentDetailsDto {
    private String studentname;
    private String studemail;
    private List<Books> books;

    public StudentDetailsDto(long l, String johnDoe, String mail) {
    }
}
