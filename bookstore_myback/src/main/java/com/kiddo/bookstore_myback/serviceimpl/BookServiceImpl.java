package com.kiddo.bookstore_myback.serviceimpl;

import com.kiddo.bookstore_myback.dao.BookDao;
import com.kiddo.bookstore_myback.entity.Book;
import com.kiddo.bookstore_myback.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.PublicKey;
import java.util.List;

/**
 * @ClassName BookServiceImpl
 * @Description the Implement of BookService
 * @Author thunderBoy
 * @Date 2019/11/6 16:04
 */

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookDao bookDao;

//    @Override
//    public Book findBookById(Integer id){
//        return bookDao.findOne(id);
//    }

    @Override
    public List<Book> getBooks() {
        return bookDao.getBooks();
    }

    @Override
    public Book detailChange(String name, String author, String isbn, Double price, Integer number, String description){
        return bookDao.detailChange( name,  author,  isbn,  price,  number,description);
    }

    @Override
    public Book detailRemove( String isbn){
        return bookDao.detailRemove(  isbn);
    }
}
