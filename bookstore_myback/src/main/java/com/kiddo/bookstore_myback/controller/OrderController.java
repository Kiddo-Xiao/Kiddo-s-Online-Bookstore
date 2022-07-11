package com.kiddo.bookstore_myback.controller;
import com.alibaba.fastjson.JSON;
import com.kiddo.bookstore_myback.constant.Constant;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.kiddo.bookstore_myback.entity.HotSelling;
import com.kiddo.bookstore_myback.entity.OrderItem;
import com.kiddo.bookstore_myback.entity.Order;
import com.kiddo.bookstore_myback.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;
    @RequestMapping("/getOrders")
    public String getOrders(@RequestBody Map params) {
        return JSON.toJSONString(orderService.getOrders(), SerializerFeature.DisableCircularReferenceDetect);
    }

    @RequestMapping("/getUserOrders")
    public String getUserOrders(@RequestBody Map params){
        Integer userId = (Integer) params.get(Constant.USER_ID);
        return JSON.toJSONString(orderService.getUserOrders(userId), SerializerFeature.DisableCircularReferenceDetect);
    }

    @RequestMapping("/getUserBookOrders")
    public String getUserBookOrders(@RequestBody Map params){
        Integer userId = (Integer) params.get(Constant.USER_ID);
        String name = (String) params.get(Constant.NAME);
        return JSON.toJSONString(orderService.getUserBookOrders(userId,name),SerializerFeature.DisableCircularReferenceDetect);
    }

    @RequestMapping("/getAdminBookOrders")
    public String getAdminBookOrders(@RequestBody Map params){
        String name = (String) params.get(Constant.NAME);
        return JSON.toJSONString(orderService.getAdminBookOrders(name),SerializerFeature.DisableCircularReferenceDetect);
    }


    @RequestMapping("/getUserDateOrder")
    public String getUserDateOrder(@RequestBody Map params){
        Integer user_id = (Integer) params.get(Constant.USER_ID);
        String from = (String) params.get(Constant.FROM);
        String to = (String) params.get(Constant.TO);
        System.out.println(from);
        System.out.println(to);
        return JSON.toJSONString(orderService.getUserDateOrder(user_id,from,to),SerializerFeature.DisableCircularReferenceDetect);
    }

    @RequestMapping("/getAdminDateOrder")
    public String getAdminDateOrder(@RequestBody Map params){
        String from = (String) params.get(Constant.FROM);
        String to = (String) params.get(Constant.TO);
        return JSON.toJSONString(orderService.getAdminDateOrder(from,to),SerializerFeature.DisableCircularReferenceDetect);
    }

    @RequestMapping("/addOrderFromUser")
    public Order addOrderFromUser (@RequestBody Map params) {
        Integer userId = (Integer) params.get(Constant.USER_ID);
        Integer orderPrice = (Integer) params.get(Constant.ORDER_PRICE);
        String date = (String) params.get(Constant.DATE);
        System.out.println("addOrder");
        return orderService.addOrderFromUser(userId, orderPrice,date);
    }

    @RequestMapping("/addOrderItem")
    public OrderItem addOrderItem(@RequestBody Map params){

        Integer orderId = (Integer) params.get(Constant.ORDER_ID);
        Integer bookId = (Integer) params.get(Constant.BOOK_ID);
        Integer number = (Integer) params.get(Constant.NUMBER);

        return orderService.addOrderItem(orderId, bookId,number);
    }

    @RequestMapping("/getHotSelling")
    public List<HotSelling>  getHotSelling(@RequestBody Map params){
        String from = (String) params.get("from");
        String to = (String) params.get("to");
        return orderService.getHotSelling(from, to);
    }
    //
    @RequestMapping("/getHotUser")
    public List<HotSelling> getHotUser(@RequestBody Map params){
        String from = (String) params.get("from");
        String to = (String) params.get("to");
        return orderService.getHotUser(from, to);
    }

}
