package com.kiddo.bookstore_myback.controller;

import com.kiddo.bookstore_myback.constant.Constant;
import com.kiddo.bookstore_myback.entity.Book;

import com.kiddo.bookstore_myback.entity.User;
import com.kiddo.bookstore_myback.service.BookService;
import com.kiddo.bookstore_myback.utils.msgutils.MsgCode;
import com.kiddo.bookstore_myback.utils.msgutils.MsgUtil;
import com.kiddo.bookstore_myback.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import  java.util.Map;

@RestController
public class BookController {
    @Autowired
    private BookService bookService;

    @RequestMapping("/getBooks")
    public List<Book> getBooks(){
        return bookService.getBooks();
    }

    @RequestMapping("/detailChange")
    public Book detailChange(@RequestBody Map params){
        //调包 com.alibaba.fastjson.JSON
        //直接解析json转成的string，映射到map

        String name = (String) params.get(Constant.NAME);
        String author = (String) params.get(Constant.AUTHOR);
        String isbn = (String) params.get(Constant.ISBN);
        String price_ = (String) params.get(Constant.PRICE);
        String number_ = (String) params.get(Constant.NUMBER);
        String description = (String) params.get(Constant.DESCRIPTION);

        Double price=0.0;
        for(int i=0;i<price_.length();++i){
            price=price*10+(price_.charAt(i)-'0');
        }
        Integer number=0;

        price_+='\0';
        for(int i=0;i<price_.length();++i){
            number=number*10+(number_.charAt(i)-'0');
        }
        return bookService.detailChange(name,author,isbn,price,number,description);
    }


    @RequestMapping("/detailRemove")
    public Book detailRemove(@RequestBody Map params){
        //调包 com.alibaba.fastjson.JSON
        //直接解析json转成的string，映射到map
        String isbn = (String) params.get(Constant.ISBN);

        return bookService.detailRemove(isbn);
    }

}
