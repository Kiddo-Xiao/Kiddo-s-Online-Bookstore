package com.kiddo.bookstore_myback.daoimpl;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.kiddo.bookstore_myback.dao.CartDao;
import com.kiddo.bookstore_myback.entity.Cart;
import com.kiddo.bookstore_myback.constant.Constant;
import com.kiddo.bookstore_myback.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Repository;

import java.util.Calendar;
import java.util.List;
import java.util.Map;

@Repository
public class CartDaoImpl implements CartDao {
    @Autowired
    private CartRepository cartRepository;

    @Override
    public List<Cart> clearCart(JSONArray delBook){
        List<Cart>cartList= cartRepository.findAll();

        for(Integer i=0;i<delBook.size();++i){
            String tmpName= JSONObject.parseObject(JSONObject.toJSONString(delBook.get(i))).getString(Constant.NAME);
            cartRepository.delete(cartRepository.getCartByName(tmpName));
        }
//        System.out.println("??????????????");
        List<Cart>afterdel=cartRepository.findAll();
        return afterdel;
    }

    @Override
    public Cart addToCart(String name,String author, Integer price, Integer number,
                          Integer bookId, Integer userId){
        Cart cart = cartRepository.getCartByName(name);
        if(cart==null){
            Cart emptyCart = new Cart(name,author,price,number,bookId,userId);
            cartRepository.save(emptyCart);
            return emptyCart;
        }else {
            cart.setNumber(cart.getNumber()+1);
            cartRepository.save(cart);
            return cart;
        }
    }

    @Override
    public List<Cart> getUserCart(Integer userId){return cartRepository.findByUserId(userId);}


}
