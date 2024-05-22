package com.example.Library.Managment.System.repositories;

import com.example.Library.Managment.System.entities.Books;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.expression.spel.ast.OpAnd;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Books, Long> {

    Optional<Books> findBooksByBookname(String bookname);

    Optional<List<Books>> findBooksByCategory_CategoryId(Long categoryId);
}
