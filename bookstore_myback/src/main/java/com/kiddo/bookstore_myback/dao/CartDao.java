package com.kiddo.bookstore_myback.dao;

import com.alibaba.fastjson.JSONArray;
import com.kiddo.bookstore_myback.entity.Cart;

import java.util.List;
import java.util.Map;

public interface CartDao {
//    List<Cart> getCart();

    List<Cart> clearCart(JSONArray delBook);

    Cart addToCart(String name, String author,  Integer price,
                   Integer number, Integer bookId, Integer userId);

    List<Cart> getUserCart(Integer userId);
}
