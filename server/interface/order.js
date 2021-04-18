import Router from "koa-router";
import axios from "./utils/axios";
import Cart from "../dbs/models/carts";
import Order from "../dbs/models/orders";
import md5 from "crypto-js/md5";
let router = new Router({ prefix: "/order" });

router.post("/createOrder", async ctx => {
  let { id, price, count } = ctx.request.body;
  let time = new Date();
  let orderID = md5(Math.random() * 1000 + time).toString();
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: "please login"
    };
  } else {
    let findCart = await Cart.findOne({ cartNo: id });
    let order = new Order({
      id: orderID,
      count,
      total: price * count,
      time,
      user: ctx.session.passport.user,
      name: findCart.detail.name,
      imgs: findCart.detail.imgs,
      status:0
    });
    try {
      let result = await order.save();
      if (result) {
        await findCart.remove()
        ctx.body = {
          code: 0,
          id:orderID
        }
      } else {
        ctx.body = {
          code:-1
        }
      }
    } catch (error) {
      ctx.body = {
        code:-1
      }
    }
  }
});
router.post('/getOrders', async ctx => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      list: [],
      msg:"去登录"
    }
  } else {
    try {
      let result = await Order.find()
      if (result) {
        ctx.body = {
          code: 0,
          list:result
        }
      } else {
        ctx.body = {
          code: 0,
          list:[]
        }
      }
    } catch (error) {
      ctx.body = {
        code: 0,
        list:[]
      }
    }
  }
})
export default router;
