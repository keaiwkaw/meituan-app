import Router from "koa-router";
import axios from "./utils/axios";
import Cart from "../dbs/models/carts";
import md5 from "crypto-js/md5";
let router = new Router({ prefix: "/cart" });
router.post("/create", async ctx => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: "please login"
    };
  } else {
    let time = new Date();
    let cartNo = md5(Math.random() * 1000 + time).toString();
    let {
      params: { id, detail }
    } = ctx.request.body;
    let cart = new Cart({
      id,
      cartNo,
      time,
      user: ctx.session.passport.user,
      detail
    });
    let result = await cart.save();
    if (result) {
      ctx.body = {
        code: 0,
        msg: "",
        id: cartNo
      };
    } else {
      ctx.body = {
        code: -1,
        msg: "fail"
      };
    }
  }
});

router.post("/getCart", async ctx => {
  console.log("获取购物车列表");
  let { id } = ctx.request.body;
  let result = await Cart.findOne({ cartNo: id });
  if (result) {
    ctx.body = {
      code: 0,
      name: result.detail.name,
      price: result.detail.price
    };
  } else {
    ctx.body = {
      code: -1,
      name: "",
      price: ""
    };
  }
});
export default router;
