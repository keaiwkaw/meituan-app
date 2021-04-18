<template>
  <div class="page-detail">
    <el-row>
      <el-col :span="24">
        <Crumbs :keyword="keyword" :type="type" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Summa :meta="product" />
      </el-col>
    </el-row>
    <el-row class="m-title">
      <el-col :span="24">
        <h3>商家团购及优惠</h3>
      </el-col>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el-col :span="24">
        <List v-if="login" :list="list" />
        <div v-else class="deal-need-login">
          <img
            src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
            alt="登录查看"
          />
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary" round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Crumbs from "@/components/detail/crumbs";
import Summa from "@/components/detail/summary";
import List from "@/components/detail/list";
export default {
  components: {
    Crumbs,
    Summa,
    List,
  },
  data() {
    return {};
  },
  computed: {
    canOrder() {
      return this.list.filter((item) => item.photos.length).length;
    },
  },
  async asyncData(ctx) {
    let { keyword, type } = ctx.query;
    let {
      status,
      data: { product, more: list, login },
    } = await ctx.$axios.get("/search/products", {
      params: {
        keyword,
        city: ctx.store.state.geo.position.city,
        type,
      },
    });
    if (status === 200) {
      return {
        keyword,
        product,
        list:list.slice(0,5),
        login,
        type,
      };
    } else {
      return {
        keyword,
        product: {},
        list: [],
        login: "",
        type,
      };
    }
  },
};
</script>

<style lang="scss" >
@import "@/assets/css/detail/index.scss";
</style>
