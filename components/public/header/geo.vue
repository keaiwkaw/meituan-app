<template>
  <div class="m-geo">
    <i class="el-icon-location">{{ $store.state.geo.position.city }}</i>
    <nuxt-link to="/changeCity" class="changeCity">切换城市</nuxt-link>
    [西安 上海 北京]
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
