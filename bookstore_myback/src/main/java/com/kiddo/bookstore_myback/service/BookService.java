package com.kiddo.bookstore_myback.service;

import com.kiddo.bookstore_myback.entity.Book;

import java.util.List;


public interface BookService {

//    Book findBookById(Integer id);

    List<Book> getBooks();
}
