package com.kiddo.bookstore_myback.controller;

import com.kiddo.bookstore_myback.constant.Constant;
import com.kiddo.bookstore_myback.entity.User;
import com.kiddo.bookstore_myback.service.UserService;
import com.kiddo.bookstore_myback.utils.msgutils.Msg;
import com.kiddo.bookstore_myback.utils.msgutils.MsgCode;
import com.kiddo.bookstore_myback.utils.msgutils.MsgUtil;
import com.kiddo.bookstore_myback.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping("/createAccount")
    public Msg createAccount(@RequestBody Map params){
        String username = (String) params.get(Constant.USERNAME);
        String password = (String) params.get(Constant.PASSWORD);
        String email = (String) params.get(Constant.EMAIL);

        User newUser = userService.addUser(username,password,email);

        if(newUser==null){
            return MsgUtil.makeMsg(MsgCode.SIGNUP_USER_ERROR);
        }else{
            JSONObject obj = new JSONObject();
            obj.put(Constant.USER_ID, newUser.getUserId());
            obj.put(Constant.USERNAME, newUser.getUsername());
            obj.put(Constant.USER_TYPE, newUser.getUserType());
            JSONObject data = JSONObject.fromObject(newUser);
            data.remove(Constant.PASSWORD);
            return MsgUtil.makeMsg(MsgCode.SUCCESS,MsgUtil.SIGNUP_SUCCESS_MSG,data);
        }
    }

    @RequestMapping("/getUserList")
    public List<User> getUserList(){return userService.getUserList();}

    @RequestMapping("/addToBlacklist")
    public List<User> addToBlacklist(@RequestBody Map params){
        Integer userId = (Integer) params.get(Constant.USER_ID);
        userService.addToBlacklist(userId);
        return getUserList();
    }

    @RequestMapping("/removeFromBlacklist")
    public List<User> removeFromBlacklist(@RequestBody Map params){
        Integer userId = (Integer) params.get(Constant.USER_ID);
        userService.removeFromBlacklist(userId);
        return getUserList();
    }
}