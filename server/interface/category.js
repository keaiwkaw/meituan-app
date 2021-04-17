import Router from "koa-router";
import axios from "./utils/axios";
import Category from "../dbs/models/category";
let router = new Router({ prefix: "/category" });
console.log(Category)
router.get("/crumbs", async ctx => {
  let res = await Category.findOne({ city: "西安" });
  if (res) {
    ctx.body = {
      areas: res.areas,
      types: res.types
    };
  } else {
    ctx.body = {
      areas: [],
      types: []
    };
  }
});
export default router;
