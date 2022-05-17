package com.kiddo.bookstore_myback.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.kiddo.bookstore_myback.constant.Constant;
import com.kiddo.bookstore_myback.entity.Cart;
import com.kiddo.bookstore_myback.service.CartService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @RequestMapping("/getUserCart")
    public List<Cart>getUserCart(@RequestBody Map delBook){
        Integer userId = (Integer) delBook.get(Constant.USER_ID);
        return cartService.getUserCart(userId);
    }

    @RequestMapping("/clearCart")
    //多账户时全删了？？？？？
    public List<Cart> clearCart(@RequestBody JSONObject obj){
        String data = obj.toJSONString();
        JSONObject json = JSON.parseObject(data);
        String delBooks = json.getString("delBooks");
        JSONArray delBookList = JSONArray.parseArray(delBooks);
        return cartService.clearCart(delBookList);
    }

    @RequestMapping("/addToCart")
    public Cart addToCart(@RequestBody Map params){
        //调包 com.alibaba.fastjson.JSON
        //直接解析json转成的string，映射到map
        String name = (String) params.get(Constant.NAME);
        String author = (String) params.get(Constant.AUTHOR);
        Integer price = (Integer) params.get(Constant.PRICE);
        //传过来的number只能是1！！！
        Integer number = (Integer) params.get(Constant.NUMBER);
        Integer bookId = (Integer) params.get(Constant.BOOK_ID);
        Integer userId = (Integer) params.get(Constant.USER_ID);
        return cartService.addToCart(name, author,price, number,bookId,userId);
    }
}
