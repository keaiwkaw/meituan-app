import Router from "koa-router";
import axios from "./utils/axios";
import Menu from "../dbs/models/menus";
import Province from "../dbs/models/provinces";
import City from "../dbs/models/cities";
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
router.get("/province/:id", async ctx => {
  let city = await City.findOne({ id: ctx.params.id });

  ctx.body = {
    code: 0,
    city: city.value.map(item => {
      return { province: item.province, id: item.id, name: item.name };
    })
  };
});
router.get("/hotCity", async ctx => {
  let list = [
    "北京市",
    "上海市",
    "广州市",
    "深圳市",
    "天津市",
    "西安市",
    "杭州市",
    "南京市",
    "武汉市",
    "成都市"
  ];
  let result = await City.find();
  let nList = [];
  result.forEach(item => {
    nList = nList.concat(
      item.value.filter(k => list.includes(k.name) || list.includes(k.province))
    );
  });
  ctx.body = {
    code: 0,
    hots: nList
  };
});
router.get("/city", async ctx => {
  let city = [];
  let result = await City.find();
  result.forEach(item => {
    city = city.concat(item.value);
  });
  ctx.body = {
    code: 0,
    city: city.map(item => {
      return {
        province: item.province,
        id: item.id,
        name:
          item.name === "市辖区" || item.name === "省直辖县级行政区划"
            ? item.province
            : item.name
      };
    })
  };
});
export default router;
