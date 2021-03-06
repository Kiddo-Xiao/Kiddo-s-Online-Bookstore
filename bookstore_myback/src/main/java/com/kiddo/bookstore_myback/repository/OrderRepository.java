package com.kiddo.bookstore_myback.repository;

import com.kiddo.bookstore_myback.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query("select o from Order o")
    List<Order> getOrders();

    List<Order> findByUserId(Integer user_id);
}
