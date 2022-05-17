package com.kiddo.bookstore_myback.service;

import com.kiddo.bookstore_myback.entity.User;


public interface UserService {

    User checkUser(String username, String password);

    User addUser(String username, String password, String email);

}
