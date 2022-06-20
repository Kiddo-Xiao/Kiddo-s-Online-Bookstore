package com.kiddo.bookstore_myback.dao;

import com.kiddo.bookstore_myback.entity.User;

import java.util.List;

public interface UserDao {

    User checkUser(String username, String password);

    User addUser(String username, String password, String email);

    List<User> getUserList();

    void addToBlacklist(Integer userId);

    void removeFromBlacklist(Integer userId);


}
