package com.kiddo.bookstore_myback.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

/**
 * @ClassName User
 * @Description Entity of User
 * @Author thunderBoy
 * @Date 2019/11/7 12:46
 */
@Data
@Entity
@Table(name = "user")
@JsonIgnoreProperties(value = {"handler","hibernateLazyInitializer","fieldHandler"})
public class User {

    @Id
    @GeneratedValue(strategy= GenerationType.SEQUENCE,generator="user_id")
    private Integer userId;
    private String name;
    private Integer type;
    private String email;
    private  String password;

    public User() {}
    public User(String name, String password, Integer type, String email) {
        this.name = name;
        this.type = type;
        this.email = email;
        this.password = password;
    }

    public Integer getUserId() {
        return userId;
    }
    public void setUserId(Integer userId) {
        this.userId = userId;
    }
    public String getUsername() {
        return name;
    }
    public void setUsername(String username) {
        this.name = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Integer getUserType() {
        return type;
    }
    public void setUserType(Integer type) {
        this.type = type;
    }
    public String getUseremail() {
        return email;
    }
    public void setUseremail(String eamil) {
        this.email = email;
    }



}
