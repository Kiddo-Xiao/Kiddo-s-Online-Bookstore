package com.kiddo.bookstore_myback.repository;

import com.kiddo.bookstore_myback.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BookRepository extends JpaRepository<Book,Integer> {

    @Query("select b from Book b")
    List<Book> getBooks();

    @Query(value = "from Book where isbn = :isbn")
    Book getBook(String isbn);
}
