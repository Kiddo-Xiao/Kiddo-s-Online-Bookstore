/*
 Navicat Premium Data Transfer

 Source Server         : Kiddo
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : mybookstoredatabase

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 11/07/2022 09:30:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book`  (
  `id` int NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `inventory` int NULL DEFAULT NULL,
  `isbn` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES (1, '凯S.霍斯特曼', '本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。', 'http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg', 981, '1', 'Java核心技术卷II', 95, '编程');
INSERT INTO `book` VALUES (3, '梅耶2', '大师名著纵横二十载，稳居任一荐书单三甲；称职程序员傍身绝学，通向C++精微奥妙之门!', 'http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg', 981, '3', 'Effective C++', 50, '编程');
INSERT INTO `book` VALUES (4, '圣-埃克苏佩里', '豆瓣9.7高分推荐！旅法翻译家梅子涵之女梅思繁法文直译，舒朗大开本，央美教授高精度还原原作插画。首次收录全球舞台剧、音乐会、电影、动画片等对《小王子》的精彩诠释，通晓名作的前世今生!', 'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg', 984, '4', '小王子2', 10, '儿童文学');
INSERT INTO `book` VALUES (5, 'Bruce Eckel', 'Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。', 'http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg', 9090, '5', 'Java编程思想', 91, '编程');
INSERT INTO `book` VALUES (6, '克里斯˙梅森', '暴雪官方历时二十年编纂而成的史料！三卷《魔兽世界编年史》将呈现大量从未公布的精美原画和插图，读者在阅读故事之余，更能享受一次视觉上的饕餮盛宴，是魔兽粉丝收藏的优选。', 'http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg', 117, '6', '魔兽世界编年史套装(全三卷)', 449, '魔幻小说');
INSERT INTO `book` VALUES (7, '刘慈欣', '刘慈欣代表作，亚洲首部“雨果奖”获奖作品！', 'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg', 14409, '7', '三体：全三册', 50, '科幻小说');
INSERT INTO `book` VALUES (8, '雨果', '《悲惨世界》是雨果在流亡期间写的长篇小说，是他的代表作，也是世界文学宝库的珍品之一。\r\n    《悲惨世界》通过冉阿让等人的悲惨遭遇以及冉阿让被卞福汝主教感化后一系列令人感动的事迹，深刻揭露和批判了19世纪法国封建专制社会的腐朽本质及其罪恶现象，对穷苦人民在封建重压下所遭受的剥削欺诈和残酷迫害表示了悲悯和同情。', 'http://img3m7.ddimg.cn/13/15/27912667-1_u_1.jpg', 385, '8', '悲惨世界（上中下）（精装版）', 104, '世界名著');
INSERT INTO `book` VALUES (9, '乔治·奥威尔', '也译“动物庄园”，是“一代人的冷峻良知”乔治·奥威尔经典的讽喻之作。虽然这一场荒诞的动物革命走向歧途，但正是因为这样我们才了解“把权力关进制度的笼子”的重要性。', 'http://img3m1.ddimg.cn/82/3/25229341-1_w_2.jpg', 120, '9', '动物农场', 20, '社会小说');
INSERT INTO `book` VALUES (10, '周志华', '击败AlphaGo的武林秘籍，赢得人机大战的必由之路：人工智能大牛周志华教授巨著，全面揭开机器学习的奥秘。', 'http://img3m0.ddimg.cn/20/24/23898620-1_w_3.jpg', 2517, '10', '机器学习', 62, '编程');
INSERT INTO `book` VALUES (11, '刘易斯', '刘易斯基金会独家授权插图！翻译家吴岩，陈良廷，刘文澜经典译本！', 'http://img3m7.ddimg.cn/1/32/22474387-1_u_2.jpg', 117, '11', '纳尼亚传奇', 86, '魔幻小说');
INSERT INTO `book` VALUES (12, '海明威', '收录诺贝尔文学奖获奖作品《老人与海》《乞力马扎罗的雪》，深深影响了马尔克斯、塞林格等文学家的创作理念。', 'http://img3m6.ddimg.cn/94/11/27891166-1_u_2.jpg', 2410, '12', '老人与海', 28, '世界名著');
INSERT INTO `book` VALUES (13, '东野圭吾', '喜欢《解忧杂货店》，就一定要读这本书。珍藏印签。有了想要守护的东西，生命就会变得有力量。悲凉的人生、千疮百孔的命运、一桩桩悲剧的发生与救赎，读来令人喟叹不已。', 'http://img3m4.ddimg.cn/68/35/28484744-2_u_6.jpg', 1226, '13', '魔力的胎动', 36, '悬疑/推理小说');
INSERT INTO `book` VALUES (14, '苑子豪', '七篇寻光故事，七种奇遇人生，送给成长路上孤独前行的你，每个人的生活都有被困在井里一样的绝望时刻，而这本书就想做点亮黑夜的那束光芒。耐心一些，保持相信，我们终会穿越漫长黑夜，抵达属于自己的黎明。', 'http://img3m0.ddimg.cn/9/18/28486170-1_u_8.jpg', 1138, '14', '我不怕这漫长黑夜', 38, '青春文学');
INSERT INTO `book` VALUES (15, '爱德华·斯诺登', '美国政府不想让全世界读到这本书，欧美上市当日作者便被美国司法部起诉！“棱镜门”主角爱德华·斯诺登首次亲自披露美国政府滥用NSA系统监控世界的真相，袒露从“爱国者”到“叛国者”的心路历程。', 'http://img3m5.ddimg.cn/86/22/28475555-2_u_9.jpg', 121, '15', '永久记录', 57, '传记文学');
INSERT INTO `book` VALUES (16, '安妮·詹克利奥维奇', '嫦娥五号探测器系统副总设计师彭兢诚意推荐！纪念人类登月50周年，五大精妙立体机关直观呈现月球的运行轨迹，全方位揭秘人类探月登月的过程，普及基本的航天知识，与孩子一起解读月球的奥秘，种下探索宇宙的种子。', 'http://img3m4.ddimg.cn/13/30/28481224-1_w_3.jpg', 1511, '16', '探索月球', 133, '儿童文学');
INSERT INTO `book` VALUES (17, '曲一线', '五年高考三年模拟，英语五三高考练习册，五三高中同步53全练全解，你值得拥有！', 'http://img3m4.ddimg.cn/62/14/27883214-1_w_2.jpg', 12332, '17', '高考英语 五年高考三年模拟', 71, '中小学教辅');
INSERT INTO `book` VALUES (18, '曹雪芹', '中国古典小说佳作，影响整个华人世界的经典！轻松易学、国家教育部推荐读物！', 'http://img3m6.ddimg.cn/31/22/23828836-1_w_8.jpg', 2441, '18', '红楼梦', 19, '世界名著');
INSERT INTO `book` VALUES (19, '曹文轩', '人民文学出版社天天出版社出品，经典作品，教师推荐，已有超过150000读者给予好评！', 'http://img3m2.ddimg.cn/32/4/23662022-1_w_9.jpg', 1235, '19', '草房子', 23, '儿童文学');
INSERT INTO `book` VALUES (20, '卡勒德·胡赛尼', '“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。回首前尘，我意识到在过去二十六年里，自己始终在窥视着那荒芜的小径。”', 'http://img3m5.ddimg.cn/26/14/25238195-1_w_3.jpg', 14141, '20', '追风筝的人', 35, '世界名著');
INSERT INTO `book` VALUES (21, '沈备军、陈昊鹏、陈雨亭', '从软件工程的本质出发、结合实际案例，系统全面地介绍软件过程、软件建模技术与方法及软件工程管理同时介绍一些热点新技术和新方法。', 'http://img3m6.ddimg.cn/32/30/1204489076-1_w_1.jpg', 1024, '21', '软件工程原理', 36, '编程');
INSERT INTO `book` VALUES (22, '西尔伯沙茨', '本书内容丰富，不仅讨论了关系数据模型和关系语言、数据库设计过程、关系数据库理论、数据库应用设计和开发、数据存储结构、数据存取技术、查询优化方法、事务处理系统和并发控制、故障恢复技术、数据仓库和数据挖掘，而且对性能调整、性能评测标准、数据库应用测试和标准化等高级应用主题进行了广泛讨论。', 'http://img3m2.ddimg.cn/83/5/22632572-1_w_1.jpg', 244, '22', '数据库系统概念', 74, '编程');
INSERT INTO `book` VALUES (23, '科尔曼', '全书选材经典、内容丰富、结构合理、逻辑清晰，对本科生的数据结构课程和研究生的算法课程都是非常实用的教材，在IT专业人员的职业生涯中，本书也是一本案头必备的参考书或工程实践手册。', 'http://img3m8.ddimg.cn/89/15/1517005898-1_w_1.jpg', 144, '23', '算法导论', 78, '编程');
INSERT INTO `book` VALUES (24, '司马迁', '荣获商务印书馆2019人文社科十大好书，张大可先生《史记》研究的集成之作，精细考证，廓清原书真伪；题解语译，展现著者史观，是一部人人都能读懂、人人都会爱读的文白对照本《史记》。', 'http://img3m7.ddimg.cn/14/14/27915737-1_w_3.jpg', 4141, '24', '史记（文白对照本）', 237, '古籍');
INSERT INTO `book` VALUES (25, '金庸', '《天龙八部》一书以北宋、辽、西夏、大理并立的历史为宏大背景，将儒释道、琴棋书画等中国传统文化融会贯通其中，书中人物繁多，个性鲜明，情节离奇，尽显芸芸众生百态。', 'http://img3m2.ddimg.cn/84/17/23273202-1_w_1.jpg', 74746, '25', '天龙八部(全五册)', 102, '武侠小说');
INSERT INTO `book` VALUES (26, '金庸', '一部《辟邪剑谱》引发灭门血案，阴险狡诈，机关算尽，只为争霸武林，真相往往出人意表。酒后高歌磨剑，梦中快意恩仇，一曲《笑傲江湖》，传一段天荒地老。 ', 'http://img3m0.ddimg.cn/82/15/23273200-1_w_1.jpg', 2520, '26', '笑傲江湖(全四册)', 80, '武侠小说');
INSERT INTO `book` VALUES (28, 'J·K·罗琳', '“沉湎于虚幻的梦想，而忘记现实的生活，这是毫无益处的，千万记住。”                                ——阿不思·邓布利多', 'http://img3m1.ddimg.cn/88/0/25479421-1_w_1.jpg', 1000, '28', '哈利波特与魔法石', 30, '魔幻小说');
INSERT INTO `book` VALUES (2, 'J·K·罗琳', '两个人不能都活着，只有一个生存下来，我们中的一个将要永远离开……', 'http://img3m4.ddimg.cn/71/20/25479404-1_w_1.jpg', 1551, '2', '哈利·波特与死亡圣器', 56, '魔幻小说');

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart`  (
  `cart_id` int NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `book_id` int NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `number` int NULL DEFAULT NULL,
  `price` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`cart_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of cart
-- ----------------------------

-- ----------------------------
-- Table structure for cart_id
-- ----------------------------
DROP TABLE IF EXISTS `cart_id`;
CREATE TABLE `cart_id`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of cart_id
-- ----------------------------
INSERT INTO `cart_id` VALUES (1001);

-- ----------------------------
-- Table structure for order_items
-- ----------------------------
DROP TABLE IF EXISTS `order_items`;
CREATE TABLE `order_items`  (
  `item_id` int NOT NULL AUTO_INCREMENT,
  `book_num` int NULL DEFAULT NULL,
  `book_id` int NULL DEFAULT NULL,
  `order_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`item_id`) USING BTREE,
  INDEX `FKqscqcme08spiyt2guyqdj72eh`(`book_id`) USING BTREE,
  INDEX `FKbioxgbv59vetrxe0ejfubep1w`(`order_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 91 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of order_items
-- ----------------------------
INSERT INTO `order_items` VALUES (33, 1, 1, 25);
INSERT INTO `order_items` VALUES (34, 1, 3, 25);
INSERT INTO `order_items` VALUES (35, 1, 3, 26);
INSERT INTO `order_items` VALUES (36, 1, 6, 26);
INSERT INTO `order_items` VALUES (38, 1, 4, 27);
INSERT INTO `order_items` VALUES (39, 1, 3, 28);
INSERT INTO `order_items` VALUES (40, 1, 10, 28);
INSERT INTO `order_items` VALUES (41, 1, 6, 29);
INSERT INTO `order_items` VALUES (42, 1, 10, 30);
INSERT INTO `order_items` VALUES (43, 1, 6, 30);
INSERT INTO `order_items` VALUES (44, 1, 13, 31);
INSERT INTO `order_items` VALUES (45, 1, 15, 31);
INSERT INTO `order_items` VALUES (46, 1, 5, 32);
INSERT INTO `order_items` VALUES (47, 2, 6, 34);
INSERT INTO `order_items` VALUES (48, 5, 4, 35);
INSERT INTO `order_items` VALUES (49, 1, 11, 36);
INSERT INTO `order_items` VALUES (50, 1, 12, 37);
INSERT INTO `order_items` VALUES (51, 5, 1, 38);
INSERT INTO `order_items` VALUES (52, 2, 13, 39);
INSERT INTO `order_items` VALUES (53, 1, 16, 39);
INSERT INTO `order_items` VALUES (54, 1, 11, 40);
INSERT INTO `order_items` VALUES (55, 1, 9, 41);
INSERT INTO `order_items` VALUES (56, 1, 25, 41);
INSERT INTO `order_items` VALUES (57, 1, 26, 41);
INSERT INTO `order_items` VALUES (58, 1, 10, 42);
INSERT INTO `order_items` VALUES (59, 2, 5, 43);
INSERT INTO `order_items` VALUES (60, 1, 3, 43);
INSERT INTO `order_items` VALUES (61, 2, 1, 44);
INSERT INTO `order_items` VALUES (62, 1, 4, 44);
INSERT INTO `order_items` VALUES (64, 1, 3, 46);
INSERT INTO `order_items` VALUES (65, 1, 1, 46);
INSERT INTO `order_items` VALUES (67, 1, 5, 47);
INSERT INTO `order_items` VALUES (68, 1, 4, 48);
INSERT INTO `order_items` VALUES (69, 1, 14, 49);
INSERT INTO `order_items` VALUES (70, 1, 9, 50);
INSERT INTO `order_items` VALUES (71, 1, 6, 51);
INSERT INTO `order_items` VALUES (74, 2, 10, 54);
INSERT INTO `order_items` VALUES (75, 2, 7, 54);
INSERT INTO `order_items` VALUES (76, 1, 7, 55);
INSERT INTO `order_items` VALUES (77, 1, 11, 56);
INSERT INTO `order_items` VALUES (78, 1, 5, 57);
INSERT INTO `order_items` VALUES (79, 3, 3, 57);
INSERT INTO `order_items` VALUES (81, 1, 3, 59);
INSERT INTO `order_items` VALUES (82, 2, 4, 60);
INSERT INTO `order_items` VALUES (83, 6, 1, 61);
INSERT INTO `order_items` VALUES (84, 1, 8, 62);
INSERT INTO `order_items` VALUES (85, 1, 9, 63);
INSERT INTO `order_items` VALUES (86, 2, 4, 64);
INSERT INTO `order_items` VALUES (87, 1, 7, 65);
INSERT INTO `order_items` VALUES (88, 1, 10, 66);
INSERT INTO `order_items` VALUES (89, 1, 12, 67);
INSERT INTO `order_items` VALUES (90, 2, 4, 67);

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `order_price` int NULL DEFAULT NULL,
  `user_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 68 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES (35, '2022-05-17', 45, 159);
INSERT INTO `orders` VALUES (63, '2022-07-08', 20, 202);
INSERT INTO `orders` VALUES (34, '2022-05-17', 898, 159);
INSERT INTO `orders` VALUES (30, '2022-05-17', 511, 159);
INSERT INTO `orders` VALUES (31, '2022-05-17', 93, 159);
INSERT INTO `orders` VALUES (32, '2022-05-17', 91, 159);
INSERT INTO `orders` VALUES (33, '2022-05-17', 76, 159);
INSERT INTO `orders` VALUES (28, '2022-05-17', 113, 158);
INSERT INTO `orders` VALUES (29, '2022-05-17', 449, 158);
INSERT INTO `orders` VALUES (27, '2022-05-17', 146, 157);
INSERT INTO `orders` VALUES (26, '2022-05-17', 500, 157);
INSERT INTO `orders` VALUES (36, '2022-05-17', 86, 159);
INSERT INTO `orders` VALUES (37, '2022-05-17', 28, 159);
INSERT INTO `orders` VALUES (38, '2022-05-17', 475, 159);
INSERT INTO `orders` VALUES (39, '2022-05-17', 205, 159);
INSERT INTO `orders` VALUES (40, '2022-05-17', 86, 159);
INSERT INTO `orders` VALUES (41, '2022-05-17', 202, 159);
INSERT INTO `orders` VALUES (42, '2022-05-17', 62, 159);
INSERT INTO `orders` VALUES (43, '2022-05-17', 233, 160);
INSERT INTO `orders` VALUES (44, '2022-05-17', 199, 160);
INSERT INTO `orders` VALUES (45, '2022-05-17', 137, 160);
INSERT INTO `orders` VALUES (46, '2022-05-17', 146, 161);
INSERT INTO `orders` VALUES (47, '2022-05-17', 365, 161);
INSERT INTO `orders` VALUES (48, '2022-05-17', 9, 161);
INSERT INTO `orders` VALUES (49, '2022-05-17', 38, 161);
INSERT INTO `orders` VALUES (64, '2022-07-08', 18, 352);
INSERT INTO `orders` VALUES (62, '2022-07-08', 104, 202);
INSERT INTO `orders` VALUES (60, '2022-07-08', 18, 202);
INSERT INTO `orders` VALUES (54, '2022-06-19', 224, 202);
INSERT INTO `orders` VALUES (55, '2022-06-19', 50, 202);
INSERT INTO `orders` VALUES (56, '2022-06-19', 86, 202);
INSERT INTO `orders` VALUES (57, '2022-06-23', 244, 252);
INSERT INTO `orders` VALUES (61, '2022-07-08', 570, 202);
INSERT INTO `orders` VALUES (59, '2022-07-06', 51, 202);
INSERT INTO `orders` VALUES (65, '2022-07-08', 50, 352);
INSERT INTO `orders` VALUES (66, '2022-07-09', 62, 402);
INSERT INTO `orders` VALUES (67, '2022-07-09', 48, 402);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('123456456@qq.com', 'KK', 2, '123456', 0);
INSERT INTO `user` VALUES ('54456@qq.com', 'jj', 1, '123456', 152);
INSERT INTO `user` VALUES ('54456@qq.com', 'ss', 1, '123456', 153);
INSERT INTO `user` VALUES ('54456@qq.com', 'zz', 1, '123456', 154);
INSERT INTO `user` VALUES ('54456@qq.com', 'aa', 1, '123456', 155);
INSERT INTO `user` VALUES ('54456@qq.com', 'll', 0, '123456', 156);
INSERT INTO `user` VALUES ('54456@qq.com', 'hh', 1, '123456', 157);
INSERT INTO `user` VALUES ('54456@qq.com', 'yy', 1, '123456', 158);
INSERT INTO `user` VALUES ('54456@qq.com', 'yyy', 1, '123456', 159);
INSERT INTO `user` VALUES ('54456@qq.com', 'kkk', 1, '123456', 160);
INSERT INTO `user` VALUES ('54456@qq.com', 'kkkk', 1, '123456', 161);
INSERT INTO `user` VALUES ('54456@qq.com', 'ah', 1, '123456', 202);
INSERT INTO `user` VALUES ('1564077932@123', 'ii', 1, '123456', 252);
INSERT INTO `user` VALUES ('54456', 'pp', 1, '123456', 302);
INSERT INTO `user` VALUES ('54456@qq.com', 'test', 0, '123456', 352);
INSERT INTO `user` VALUES ('54456', 'ttt', 0, '123456', 402);

-- ----------------------------
-- Table structure for user_auth
-- ----------------------------
DROP TABLE IF EXISTS `user_auth`;
CREATE TABLE `user_auth`  (
  `user_id` int NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `user_type` int NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_auth
-- ----------------------------
INSERT INTO `user_auth` VALUES (1, '123456', 2, 'KK');

-- ----------------------------
-- Table structure for user_id
-- ----------------------------
DROP TABLE IF EXISTS `user_id`;
CREATE TABLE `user_id`  (
  `next_val` bigint NULL DEFAULT NULL
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Fixed;

-- ----------------------------
-- Records of user_id
-- ----------------------------
INSERT INTO `user_id` VALUES (501);

SET FOREIGN_KEY_CHECKS = 1;
