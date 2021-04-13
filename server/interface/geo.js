import Router from "koa-router";
import axios from "./utils/axios";
import Menu from "../dbs/models/menus";
import Province from "../dbs/models/provinces";
let router = new Router({ prefix: "/geo" });
router.get("/getPosition", async ctx => {
  let {
    status,
    data: { forecasts }
  } = await axios.get("https://api.asilu.com/weather_v2/");

  if (status === 200) {
    const { city, province } = forecasts[0];
    ctx.body = {
      province,
      city
    };
  } else {
    ctx.body = {
      province: "",
      city: ""
    };
  }
});
router.get("/menu", async ctx => {
  const { menu } = await Menu.findOne();
  ctx.body = {
    menu
  };
});
router.get("/province", async ctx => {
  const province = await Province.find();
  ctx.body = {
    province: province.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      };
    })
  };
});
export default router;
