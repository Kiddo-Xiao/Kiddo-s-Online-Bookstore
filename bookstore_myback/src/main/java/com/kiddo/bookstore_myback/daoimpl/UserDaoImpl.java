package com.kiddo.bookstore_myback.daoimpl;

import com.alibaba.fastjson.JSONArray;
import com.kiddo.bookstore_myback.dao.UserDao;
import com.kiddo.bookstore_myback.entity.User;
import com.kiddo.bookstore_myback.entity.UserAuth;
import com.kiddo.bookstore_myback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    UserRepository userRepository;

    @Override
    public User checkUser(String username, String password){
        return userRepository.checkUser(username,password);
    }

    @Override
    public User addUser(String username, String password, String email) {

        if(userRepository.getUserByName(username)!=null){
            return null;
        }
        User newUser= new User(username,password,1,email);
        userRepository.save(newUser);
        User userGot=userRepository.getUserByName(username);

        System.out.println(userGot);
        return userGot;
    }

    @Override
    public List<User> getUserList() {
        return userRepository.getUserList(0,1);
    }

    @Override
    public void addToBlacklist(Integer userId){
        User user = userRepository.getUserById(userId);
        user.setType(0);
        userRepository.save(user);
        return ;
    }

    @Override
    public void removeFromBlacklist(Integer userId){
        User user = userRepository.getUserById(userId);
        user.setType(1);
        userRepository.save(user);
        return ;
    }

}
