# 迭代记录💪💪

Kiddo's Online Bookstore:)

## [3.23]Version-0——静态前端（纯手动排版+React）
### 1.界面展示
1.1.【登录界面】
![35dca4ee64fef95f17d31691245fc60](https://user-images.githubusercontent.com/74357630/168807139-845ad1c5-ae08-4396-b255-d702ae6e5ff6.jpg)
1.2.【首页展示】
![f04616a7538f0a06c66d77eb73af227](https://user-images.githubusercontent.com/74357630/168807210-0d5f1c46-53db-417b-82ff-f8ab4bd7a2aa.png)
1.3.【书籍详情】
![1355c7e0e21d0487d8f332e1b800391](https://user-images.githubusercontent.com/74357630/168807287-3bb1b12a-9702-4c08-9134-5fce3abcadac.jpg)
1.4.【购物车】
![8ba441a64686b8b02fdb8c4cc232761](https://user-images.githubusercontent.com/74357630/168807261-e1bc0eed-c3a7-45c2-916a-1ec04344edcb.jpg)

## [3.26]Version-1——静态前端（纯antd版+React）
### 1.界面展示
#### 1.1.【登录界面】
![1253eed0a4482a4f9caeb46274ae18d](https://user-images.githubusercontent.com/74357630/168809120-4db3e2a5-6d06-4a4c-a6b2-6b5ca23d8aa1.png)
#### 1.2.【首页展示】
![46bb47599263dc45883feb3a93bf93a](https://user-images.githubusercontent.com/74357630/168809140-5d1455e5-7239-4649-b184-7c17a932f630.png)
#### 1.3.【书籍详情】
![0c9ee88828dbacb08dad7829744f244](https://user-images.githubusercontent.com/74357630/168809193-6e833ac3-8616-4497-ac83-cafda1dcb759.png)
#### 1.4.【购物车】
![d45ec89301097dc13b765cafd39ae22](https://user-images.githubusercontent.com/74357630/168809235-62bf68df-644b-40ae-991a-250e71266ddd.png)
#### 1.5.【订单】
![49b02b7180a33463fe565290e807963](https://user-images.githubusercontent.com/74357630/168809282-a69db43c-a85d-4f8c-a5bb-f0003e0943a7.png)

## [4.15]Version-2——数据库+前后端连通（初步美化版）
### 1.界面展示
#### 1.1.【登录&注册】


https://user-images.githubusercontent.com/74357630/168817949-28259a8c-81af-4f02-8c49-f401346f9ac7.MP4


#### 1.2.【首页展示&搜索】


https://user-images.githubusercontent.com/74357630/168819839-1491b455-2334-4f6f-884c-671346a218ac.MP4



#### 1.3.【书籍详情&添加购物车】


https://user-images.githubusercontent.com/74357630/168819329-153b40fb-0877-4863-8a35-55dea7878c1a.MP4


#### 1.4.【购物车&下订单】


https://user-images.githubusercontent.com/74357630/168819303-9422ec44-e9b1-4dc5-a8f3-932cbee38cfc.MP4


#### 1.5.【订单详情&登出】


https://user-images.githubusercontent.com/74357630/168819251-e067a391-392f-4307-8e94-2b4b4c0d36e7.MP4


### 2.后端功能实现（普通用户）
#### 1.1.登录：
用户使用存储在数据库中的用户名和密码登录
#### 1.2.书籍列表主页：
以列表形式展示所有存储在数据库中的书籍，且可根据书名搜索
#### 1.3.书籍详情：
点击书籍列表中的每一本书籍，进入该书籍的详情页
#### 1.4.加入购物车：
在书籍详情页上添加加入购物车的功能，购物车信息存放数据库
#### 1.5.下订单：
在浏览购物车页面时，可以下订单，完成交易


### 3.数据库设计（表x5）
#### 3.1.书籍《book》
![image](https://user-images.githubusercontent.com/74357630/168822621-b17e5e96-a63a-4e45-aa08-eb2eff7df2c9.png)
#### 3.2.用户《user》
![image](https://user-images.githubusercontent.com/74357630/168822733-31550bad-bc0a-47d3-8579-0e6b7aaee305.png)
#### 3.3.购物车《cart》
⚠存在信息冗余
![image](https://user-images.githubusercontent.com/74357630/168822851-cf789208-8a08-4c07-8ebd-8ed7dcba752b.png)
#### 3.4.订单《orders》
![image](https://user-images.githubusercontent.com/74357630/168823014-9d14ef33-8356-439d-82fc-9c05dde7102c.png)
#### 3.4.订单条目《order_items》
![image](https://user-images.githubusercontent.com/74357630/168823166-1afba030-f950-4b0a-ab79-d3ddea0cda96.png)


### 4.架构 
#### 4.1.前端
React组件化
#### 4.2.前后端集成
a) 运用 Ajax 和 JSON 实现前后端 HTTP 请求和响应的发送，以及响应数据的传递
b) 使用Router路由功能实现各个页面之间的跳转逻辑的控制
#### 4.3.数据库
使用 JDBC 直接数据库访问形式访问数据，运用 SQL 语句实现数据操作
