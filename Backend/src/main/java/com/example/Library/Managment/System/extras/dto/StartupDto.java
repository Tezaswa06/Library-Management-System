package com.example.Library.Managment.System.extras.dto;

import com.example.Library.Managment.System.dto.BooksDto;
import com.example.Library.Managment.System.dto.CategoryDto;
import com.example.Library.Managment.System.dto.StudentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class StartupDto {

    private List<BooksDto> books;
    private List<CategoryDto> categories;
    private List<StudentDto> students;

}
