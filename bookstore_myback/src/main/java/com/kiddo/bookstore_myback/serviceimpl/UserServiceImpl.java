package com.kiddo.bookstore_myback.serviceimpl;

import com.kiddo.bookstore_myback.dao.UserDao;
import com.kiddo.bookstore_myback.entity.User;
import com.kiddo.bookstore_myback.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @ClassName UserServiceImpl
 * @Description the implement of user service
 * @Author thunderBoy
 * @Date 2019/11/7 13:16
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Override
    public User checkUser(String username, String password){
        return userDao.checkUser(username,password);
    }

    @Override
    public User addUser(String username, String password, String email) {
        return userDao.addUser(username,password,email);
    }
}
