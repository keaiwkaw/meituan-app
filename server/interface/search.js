import Router from "koa-router";
import axios from "./utils/axios";
import Poi from "../dbs/models/pois";
import Style from "../dbs/models/styles";
let router = new Router({ prefix: "/search" });
router.get("/top", async ctx => {
  let top = await Poi.find({
    city: new RegExp(ctx.query.city),
    name: new RegExp(ctx.query.input)
  });
  ctx.body = {
    top: top.slice(0, 10).map(item => {
      return {
        name: item.name,
        type: item.type
      };
    })
  };
});
//?name=美甲&city=三亚
router.get("/hotPlace", async ctx => {
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city;
  let top = await Poi.find({
    city: "三亚"
  });
  ctx.body = {
    top: top.map(item => {
      return {
        name: item.name,
        type: item.type
      };
    })
  };
});

router.get("/resultsByKeywords", async ctx => {
  let { city, keyword } = ctx.query;
  keyword = "酒店";
  let res = await Style.find({ name: new RegExp(keyword) });
  ctx.body = {
    res
  };
});

router.get("/products", async ctx => {
  let { keyword = "日升昌酒店", city = "西安" } = ctx.query;
  let res = await Style.find({ name: keyword });
  
  if (res) {
    ctx.body = {
      product: res[0],
      more: ctx.isAuthenticated() ? res : [],
      login: ctx.isAuthenticated()
    };
  } else {
    ctx.body = {
      product: {},
      more: ctx.isAuthenticated() ? res : [],
      login: ctx.isAuthenticated()
    };
  }
});

export default router;
