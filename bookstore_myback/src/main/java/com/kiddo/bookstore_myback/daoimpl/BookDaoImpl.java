package com.kiddo.bookstore_myback.daoimpl;



import com.kiddo.bookstore_myback.dao.BookDao;
import com.kiddo.bookstore_myback.entity.Book;
import com.kiddo.bookstore_myback.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BookDaoImpl implements BookDao {
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> getBooks() {
        return bookRepository.getBooks();
    }

}
