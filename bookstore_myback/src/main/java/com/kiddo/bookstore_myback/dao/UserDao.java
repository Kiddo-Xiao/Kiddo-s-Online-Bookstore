package com.kiddo.bookstore_myback.dao;

import com.kiddo.bookstore_myback.entity.User;

public interface UserDao {

    User checkUser(String username, String password);

    User addUser(String username, String password, String email);

}
