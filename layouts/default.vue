<template>
  <el-container class="layout-default">
    <el-header height="197px">
      <Myheader />
    </el-header>
    <el-main><Nuxt /></el-main>
    <el-footer height="100%"><Myfooter /></el-footer>
  </el-container>
</template>

<script>
import Myheader from "@/components/public/header/index.vue";
import Myfooter from "@/components/public/footer/index.vue";
export default {
  components: {
    Myheader,
    Myfooter,
  },
};
</script>
