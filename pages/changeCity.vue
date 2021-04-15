<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24"><ISelect /></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><Hot /></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><Categroy /></el-col>
    </el-row>
  </div>
</template>

<script>
import ISelect from "../components/chanegCity/iselect";
import Hot from "../components/chanegCity/hot";
import Categroy from "../components/chanegCity/categroy";
export default {
  components: {
    ISelect,
    Hot,
    Categroy,
  },
};
</script>

<style lang="scss">
</style>

