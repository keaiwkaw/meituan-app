<template>
  <dl class="m-sum-card">
    <dt>
      <h1>{{ meta.name }}</h1>
      <el-rate v-model="rate" disabled></el-rate>
      <span>{{ Number(meta.biz_ext.rating) || rate }}分</span>
      <span>人均{{ Number(meta.biz_ext.cost) }}</span>
      <ul>
        <li @click="openMap(meta.location)">地址：{{ meta.addr }}</li>
        <li>邮箱：{{ meta.tel }}</li>
      </ul>
    </dt>
    <dd>
      <el-carousel height="214px" indicator-position="none">
        <el-carousel-item v-for="(item, index) in meta.photos" :key="index">
          <h3>
            <img :src="item.url" alt="item.title" width="100%" height="100%" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    meta: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      sale: 70 + Math.floor(Math.random() * 300),
    };
  },
  computed: {
    rate () {
      return Number(this.meta.biz_ext.rating) || Math.floor(Math.random() * 5);
    },
  },
  methods: {
    openMap: function (location) {},
  },
};
</script>

<style lang="scss" scoped>
</style>
