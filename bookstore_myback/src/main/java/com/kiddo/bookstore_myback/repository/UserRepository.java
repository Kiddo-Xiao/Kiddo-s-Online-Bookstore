package com.kiddo.bookstore_myback.repository;

import com.kiddo.bookstore_myback.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,String> {

    @Query(value = "from User where name = :name and password = :password")
    User checkUser(@Param("name") String name, @Param("password") String password);

    @Query("select p from User p where  p.name=:name")
    User getUserByName(String name);
}
