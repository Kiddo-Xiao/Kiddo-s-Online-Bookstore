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

    @Override
    public Book detailChange(String name, String author, String isbn, Double price, Integer number,String description){

        Book book = bookRepository.getBook( isbn);
        book.setName(name);
        book.setAuthor(author);
        book.setPrice(price);
        book.setInventory(number);
        book.setDescription(description);
        bookRepository.save(book);
        book = bookRepository.getBook( isbn);
        return book;
    }

    @Override
    public Book detailRemove( String isbn){

        Book book = bookRepository.getBook( isbn);
        bookRepository.delete(book);

        return book;
    }

}
