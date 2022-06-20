package com.kiddo.bookstore_myback.service;

import com.kiddo.bookstore_myback.entity.User;
import org.springframework.data.relational.core.sql.In;

import java.util.List;


public interface UserService {

    User checkUser(String username, String password);

    User addUser(String username, String password, String email);

    List<User> getUserList();

    void addToBlacklist(Integer userId);

    void removeFromBlacklist(Integer userId);
}
