package com.kiddo.bookstore_myback.serviceimpl;


import com.kiddo.bookstore_myback.dao.BookDao;
import com.kiddo.bookstore_myback.dao.OrderDao;
import com.kiddo.bookstore_myback.entity.*;
import com.kiddo.bookstore_myback.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderDao orderDao;
    @Autowired
    private BookDao bookDao;
    @Override
    public Order findOrderById(Integer id){
        return orderDao.findOne(id);
    }

    @Override
    public List<Order> getOrders() {
        List<Order> orderList=orderDao.getOrders();
        return orderList;
    }

    @Override
    public Order addOrderFromUser(Integer user_id, Integer order_price, String date) {
        return orderDao.addOrderFromUser(user_id,order_price,date);
    }

    @Override
    public OrderItem addOrderItem(Integer order_id, Integer book_id, Integer book_num) {
        OrderItem result = orderDao.addOrderItem(order_id,book_id,book_num);
        return result;
    }

    @Override
    public List<Order> getUserOrders(Integer user_id) {
        return orderDao.getUserOrders(user_id);
    }

    @Override
    public List<Order> getUserBookOrders(Integer user_id, String bookName) {
        return orderDao.getUserBookOrders(user_id,bookName);
    }

    @Override
    public List<Order> getAdminBookOrders(String bookName) {
        return orderDao.getAdminBookOrders(bookName);
    }

    @Override
    public List<Order> getUserDateOrder(Integer user_id, String from, String to) {
        return orderDao.getUserDateOrder(user_id,from,to);
    }

    @Override
    public Object getAdminDateOrder(String from, String to) {
        return orderDao.getAdminDateOrder(from,to);
    }
}
