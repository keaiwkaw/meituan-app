import Router from "koa-router";
import axios from "./utils/axios";
import Poi from "../dbs/models/pois";
let router = new Router({ prefix: "/search" });
router.get("/top", async ctx => {
  let top = await Poi.find({
    city: ctx.query.city,
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
    city
  }).limit(10);
  ctx.body = {
    top: top.map(item => {
      return {
        name: item.name,
        type:item.type
      }
    })
  };
});
export default router;
