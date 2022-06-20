package com.kiddo.bookstore_myback.controller;

import com.alibaba.fastjson.JSON;
import com.kiddo.bookstore_myback.constant.Constant;
import com.kiddo.bookstore_myback.entity.User;
import com.kiddo.bookstore_myback.service.UserService;
import com.kiddo.bookstore_myback.utils.msgutils.Msg;
import com.kiddo.bookstore_myback.utils.msgutils.MsgCode;
import com.kiddo.bookstore_myback.utils.msgutils.MsgUtil;
import com.kiddo.bookstore_myback.utils.sessionutils.SessionUtil;
import net.sf.json.JSONObject;
import org.apache.tomcat.util.bcel.Const;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;
import java.util.Map;


/**
 *@ClassName LoginController
 *@Description Controller for login
 *@Author thunderBoy
 *@Date 2019-11-05 15:09
 */
@RestController
public class LoginController {
    @Autowired
    private UserService userService;

    /**
     * @Description: login
     * @Param: username, password
     * @return: Msg
     * @Author: thunderBoy
     */
    @RequestMapping("/login")
    public Msg login(@RequestBody Map params) {
        //调包 com.alibaba.fastjson.JSON
        //直接解析json转成的string，映射到map
        String username = (String) params.get(Constant.USERNAME);
        String password = (String) params.get(Constant.PASSWORD);
        User auth = userService.checkUser(username, password);
        if (auth != null) {
            System.out.println(auth);

            JSONObject obj = new JSONObject();
            obj.put(Constant.USER_ID, auth.getUserId());
            obj.put(Constant.USERNAME, auth.getUsername());
            obj.put(Constant.USER_TYPE, auth.getUserType());
            SessionUtil.setSession(obj);
            JSONObject data = JSONObject.fromObject(auth);
            data.remove(Constant.PASSWORD);
            if(auth.getType()==0){
                return MsgUtil.makeMsg(MsgCode.LOGIN_USER_ERROR,MsgUtil.IN_BLACKLIST,data);
            }
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, data);
        } else {
            return MsgUtil.makeMsg(MsgCode.LOGIN_USER_ERROR);
        }
    }

    @RequestMapping("/logout")
    public Msg logout() {
        Boolean status = SessionUtil.removeSession();

        if (status) {
            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGOUT_SUCCESS_MSG);
        }
        return MsgUtil.makeMsg(MsgCode.ERROR, MsgUtil.LOGOUT_ERR_MSG);
    }

    /**
     * @Description: getSession
     * @Param: null
     * @return: Msg
     * @Author: thunderBoy
     */
    @RequestMapping("/checkSession")
    public Msg checkSession() {
        JSONObject auth = SessionUtil.getAuth();

//        if (auth == null) {
//            return MsgUtil.makeMsg(MsgCode.NOT_LOGGED_IN_ERROR);
//        } else {
//            return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, auth);
//        }
        return MsgUtil.makeMsg(MsgCode.SUCCESS, MsgUtil.LOGIN_SUCCESS_MSG, auth);
    }
}

