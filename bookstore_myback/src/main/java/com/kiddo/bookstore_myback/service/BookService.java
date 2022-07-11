package com.kiddo.bookstore_myback.service;

import com.kiddo.bookstore_myback.entity.Book;

import java.util.List;


public interface BookService {

//    Book findBookById(Integer id);

    List<Book> getBooks();

    Book detailChange(String name,String author,String isbn,Double price,Integer number,String description);

    Book detailRemove(String isbn);

}
