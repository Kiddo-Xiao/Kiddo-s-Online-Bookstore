package com.kiddo.bookstore_myback.repository;

import com.kiddo.bookstore_myback.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem,Integer> {
    @Query("select i from OrderItem i")
    List<OrderItem> getOrderItems();
}
