package com.kiddo.bookstore_myback.dao;
import com.kiddo.bookstore_myback.entity.HotSelling;
import com.kiddo.bookstore_myback.entity.Order;
import com.kiddo.bookstore_myback.entity.OrderItem;

import java.util.List;

public interface OrderDao {
    Order findOne(Integer id);

    List<Order> getOrders();

    Order addOrderFromUser(Integer user_id, Integer order_price, String date);

    OrderItem addOrderItem(Integer order_id, Integer book_id, Integer book_num);

    List<Order> getUserOrders(Integer user_id);

    List<Order> getUserBookOrders(Integer user_id, String bookName);

    List<Order> getUserDateOrder(Integer user_id, String from, String to);

    List<Order> getAdminBookOrders(String bookName);

    Object getAdminDateOrder(String from, String to);

    List<HotSelling> getHotSelling(String from, String to);

    List<HotSelling> getHotUser(String from, String to);

}
