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
public class CategoryDto {

    private String categoryName;
    private List<Books> books;
}
