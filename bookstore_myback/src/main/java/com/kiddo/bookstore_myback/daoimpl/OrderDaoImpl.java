package com.kiddo.bookstore_myback.daoimpl;

import com.kiddo.bookstore_myback.dao.OrderDao;
import com.kiddo.bookstore_myback.entity.*;
import com.kiddo.bookstore_myback.repository.BookRepository;
import com.kiddo.bookstore_myback.repository.OrderItemRepository;
import com.kiddo.bookstore_myback.repository.OrderRepository;
import com.kiddo.bookstore_myback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;


@Repository
public class OrderDaoImpl implements OrderDao {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Order findOne(Integer id) {
        return orderRepository.getOne(id);
    }

    @Override
    public List<Order> getOrders() {
        List<Order> orderList=orderRepository.getOrders();
        System.out.println(1);
        return orderList;

    }

    @Override
    public List<Order> getUserOrders(Integer user_id) {
        return orderRepository.findByUserId(user_id);
    }

    @Override
    public List<Order> getUserBookOrders(Integer user_id, String bookName) {
        List<Order> userOrder=getUserOrders(user_id);
        List<Order> result = new ArrayList<Order>();
        for(Order item:userOrder){
            List<OrderItem> userOrderItemList=item.getOrderItemList();
            for(OrderItem orderItem1:userOrderItemList) {
                if (orderItem1.getBook().getName().equals(bookName)) {
                    result.add(item);
                    break;
                }
            }
        }
        return result;
    }

    @Override
    public List<Order> getAdminBookOrders( String bookName) {
        List<Order> orderList=getOrders();
        List<Order> result = new ArrayList<Order>();
        for(Order item:orderList){
            List<OrderItem> userOrderItemList=item.getOrderItemList();
            for(OrderItem orderItem1:userOrderItemList) {
                if (orderItem1.getBook().getName().equals(bookName)) {
                    result.add(item);
                    break;
                }
            }
        }
        return result;
    }

    @Override
    public Object getAdminDateOrder(String from, String to) {
        List<Order> userOrder=getOrders();
        List<Order> result = new ArrayList<Order>();
        for(Order item:userOrder){
            if(item.getDate().compareTo(from)>=0 && item.getDate().compareTo(to)<=0){
                result.add(item);
            }
        }
        return result;
    }

    @Override
    public List<Order> getUserDateOrder(Integer user_id, String from, String to) {
        List<Order> userOrder=getUserOrders(user_id);
        List<Order> result = new ArrayList<Order>();

        for(Order item:userOrder){
            if(item.getDate().compareTo(from)>=0 && item.getDate().compareTo(to)<=0){
                result.add(item);
            }
        }
        return result;
    }

    @Override
    public Order addOrderFromUser(Integer userId, Integer orderPrice, String date) {
        Order newOrder=new Order(userId,orderPrice,date);
        orderRepository.save(newOrder);
        return newOrder;
    }

    @Override
    public OrderItem addOrderItem(Integer order_id, Integer book_id, Integer book_num) {
        Book b=bookRepository.findById(book_id).get();
        Order order=orderRepository.findById(order_id).get();
        OrderItem orderItem=new OrderItem(order,b,book_num);
        orderItemRepository.save(orderItem);
        b.setInventory(b.getInventory()-book_num);
        bookRepository.save(b);
        return orderItem;
    }


}



