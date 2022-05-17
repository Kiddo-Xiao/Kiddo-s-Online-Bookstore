package com.kiddo.bookstore_myback.serviceimpl;

import com.alibaba.fastjson.JSONArray;
import com.kiddo.bookstore_myback.dao.CartDao;
import com.kiddo.bookstore_myback.entity.Cart;
import com.kiddo.bookstore_myback.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CartServiceImpl implements CartService {
    @Autowired
    private CartDao cartDao;

//    @Override
//    public List<Cart> getCart() {
//        return cartDao.getCart();
//    }

    @Override
    public List<Cart> clearCart(JSONArray delBook) {
        return cartDao.clearCart(delBook);
    }

    @Override
    public Cart addToCart(String name, String author, Integer price, Integer number, Integer bookId, Integer userId) {
        return cartDao.addToCart(name, author,price, number, bookId, userId);
    }

    @Override
    public List<Cart> getUserCart(Integer userId) {
        return cartDao.getUserCart(userId);
    }
}
