package com.kiddo.bookstore_myback.daoimpl;

import com.kiddo.bookstore_myback.dao.UserDao;
import com.kiddo.bookstore_myback.entity.User;
import com.kiddo.bookstore_myback.entity.UserAuth;
import com.kiddo.bookstore_myback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
}
