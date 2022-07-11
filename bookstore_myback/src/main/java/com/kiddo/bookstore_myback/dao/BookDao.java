package com.kiddo.bookstore_myback.dao;

import com.kiddo.bookstore_myback.entity.Book;

import java.util.List;

public interface BookDao {
//    Book findOne(Integer id);

    List<Book> getBooks();

    Book detailChange(String name, String author, String isbn, Double price, Integer number, String description);
    Book detailRemove(String isbn);
}
