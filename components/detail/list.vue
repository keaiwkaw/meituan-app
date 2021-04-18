<template>
  <div class="m-detail-list">
    <ul>
      <li>{{ list.filter((item) => item.photos.length).length }}款套餐</li>
      <Item v-for="(item, idx) in list" :key="idx" :meta="item" />
    </ul>
  </div>
</template>

<script>
import Item from "./item";
export default {
  components: {
    Item,
  },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
