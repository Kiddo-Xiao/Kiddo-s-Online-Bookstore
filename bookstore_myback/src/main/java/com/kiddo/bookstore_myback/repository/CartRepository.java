package com.kiddo.bookstore_myback.repository;

import com.kiddo.bookstore_myback.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {
//    @Query("select c from Cart c")
//    List<Cart> getCart();

    @Query("select p from Cart p where  p.name=:name")
    Cart getCartByName(@Param("name") String name);

    List<Cart> findByUserId(Integer userId);

}
