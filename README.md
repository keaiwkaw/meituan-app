# 美团官网PC

>本项目基于Nuxtjs、Nodejs、Koa、ElementUI、mongodb、redis



**高仿美团全栈项目Nuxtjs+NodeJs+mongodb+redis**

正版地址：`https://coding.imooc.com/class/280.html`

本项目所有接口都来自于本地数据库，只有一个获取本地地址的是用的一个天气接口嘿嘿

## 写完这个项目呢可以学到什么？

1. Nuxt.js
2. koa
3. SMTP(邮箱验证码)
4. 组件化开发
5. 语义化DOM结构
6. 网站主题基本架构
7. 某些库的使用（passport...）
8. 数据库的少量操作
9. 路由设计
10. 项目目录结构设计

## 功能列表:

- [x] 登录
- [x] 注册
- [x] 地图服务
- [x] 搜索
- [x] 分类
- [x] 购物车
- [x] 订单
- [ ] 支付
- [ ] 图片懒加载
- [ ] 某些页面的点击跳转
- [x] 获取本地位置信息
- [ ] 功能细节

## 如何启动

启动前请确保已经开启`mongodb`和`redis`

```bash
# 安装依赖
$ yarn install

# 本地启动
$ yarn dev

# 打包上线
$ yarn build
$ yarn start

# 生成静态项目
$ yarn generate
```

## **踩坑记录**：

**mongodb**：新版的mongodb没有导入，需要下载[工具包](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.3.1.zip)解压后导入安装mongobd路径下`lib`文件中

**Nuxtjs**：新版的Nuxtjs没有`server`目录需要自己手动安装`koa koa-router`等相关依赖包

**mongodbCollection**：使用mongoose默认会把集合变成复数，所以如果集合名是单数时导出模型时指定第三个参数-*集合名*

**SMTP**：好像过一段时间授权码就会自动失效，重新获取下就好

新版`Nuxtjs`配置`koa`方法

**1**:  `nuxtjsconfig.js`加上`dev: process.env.NODE_ENV !== "production",`

**2** : 安装`nodemon`

**3** : 报错无法使用ES6格式书写：安装`babel`和`babel-preset-env`，

**4** : 修改`package.json`中 `scripts`的`dev`为` "NODE_ENV=development nodemon server/index.js --exec babel-node"`

**Collection的导入与导出**

导出：`mongoexport -h dbhost -d dbname -c collectionName -o outputPath`

导入：`mongoimport -h dbhost -d dbname -c collectionname`

## 项目目录结构

```txt
├─store //VueX
|   ├─index.js
|   ├─modules
|   |    ├─geo.js
|   |    └home.js
├─static
|   └favicon.ico
├─server
|   ├─index.js  //启动文件夹
|   ├─interface  //接口
|   |     ├─cart.js
|   |     ├─category.js
|   |     ├─geo.js
|   |     ├─order.js
|   |     ├─search.js
|   |     ├─users.js
|   |     ├─utils
|   |     |   ├─axios.js
|   |     |   └passport.js
|   ├─dbs_copy  //相关Collection
|   |    ├─areas.dat
|   |    ├─category.dat
|   |    ├─cities.dat
|   |    ├─maps.dat
|   |    ├─menus.dat
|   |    ├─pois.dat
|   |    ├─provinces.dat
|   |    ├─regions.dat
|   |    ├─styles.dat
|   |    └topsearches.dat
|   ├─dbs  //数据库配置
|   |  ├─config.js
|   |  ├─models
|   |  |   ├─carts.js
|   |  |   ├─category.js
|   |  |   ├─cities.js
|   |  |   ├─menus.js
|   |  |   ├─orders.js
|   |  |   ├─pois.js
|   |  |   ├─provinces.js
|   |  |   ├─styles.js
|   |  |   └users.js
├─plugins
|    └element-ui.js
├─pages  //路由页面
|   ├─cart.vue
|   ├─changeCity.vue
|   ├─detail.vue
|   ├─exit.vue
|   ├─index.vue
|   ├─login.vue
|   ├─order.vue
|   ├─products.vue
|   └register.vue
├─middleware
├─layouts
|    ├─blank.vue
|    └default.vue
├─components //组件
|     ├─Logo.vue
|     ├─public
|     |   ├─map.vue
|     |   ├─header
|     |   |   ├─geo.vue
|     |   |   ├─index.vue
|     |   |   ├─nav.vue
|     |   |   ├─searchBar.vue
|     |   |   ├─topBar.vue
|     |   |   └user.vue
|     |   ├─footer
|     |   |   └index.vue
|     ├─products
|     |    ├─category.vue
|     |    ├─crumbs.vue
|     |    ├─iselect.vue
|     |    ├─list.vue
|     |    └product.vue
|     ├─order
|     |   └list.vue
|     ├─index
|     |   ├─artistic.vue
|     |   ├─life.vue
|     |   ├─menu.vue
|     |   └slider.vue
|     ├─detail
|     |   ├─crumbs.vue
|     |   ├─item.vue
|     |   ├─list.vue
|     |   └summary.vue
|     ├─chanegCity
|     |     ├─categroy.vue
|     |     ├─hot.vue
|     |     └iselect.vue
|     ├─cart
|     |  └list.vue
```

## 项目结果展示

### 首页

![image-20210418205237849](https://i.loli.net/2021/04/18/B1M49UFlsweECtZ.png)![image-20210418205259778](https://i.loli.net/2021/04/18/GVLNQuBfX6l8zv5.png)

### 登录注册

![image-20210418205337030](https://i.loli.net/2021/04/18/4iSefryRDJnpAx9.png)

![image-20210418205413992](https://i.loli.net/2021/04/18/Seox27YR3MZplNV.png)

### 产品列表

![image-20210418205537508](https://i.loli.net/2021/04/18/1RdpIlGsc8JA2PB.png)

### 切换城市

![image-20210418205608600](https://i.loli.net/2021/04/18/H2hCdD9FVtgwKpy.png)

### 产品详情

![image-20210418205641191](https://i.loli.net/2021/04/18/OoYyCdlSA5iep9N.png)

### 购物车

![image-20210418205746219](https://i.loli.net/2021/04/18/u9j3TMiFJ1yVXkK.png)



### 订单页

![image-20210418205824103](https://i.loli.net/2021/04/18/WwoPestGjvkCRV2.png)

### 各章节解析

[高仿美团全栈项目章节解析](http://www.tianhw.tk/2021/04/12/%E7%BE%8E%E5%9B%A2%E5%85%A8%E6%A0%88%E9%A1%B9%E7%9B%AE%E5%AF%BC%E8%88%AA%E5%B8%96/)

