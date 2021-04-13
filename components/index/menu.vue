<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item, idx) in $store.state.home.menu"
        :key="idx"
        @mouseenter="enter"
      >
        <i :class="item.type" />{{ item.name }}<span class="arrow" />
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <!-- 模块循环 -->
      <template v-for="(item, idx) in curdetail.child">
        <h4 :key="idx">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
    };
  },
  methods: {
    mouseleave() {
      let self = this;
      self._timer = setTimeout(() => {
        self.kind = "";
      }, 150);
    },
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    sover() {
      clearTimeout(this._timer);
    },
    sout() {
      this.kind = "";
    },
  },
  computed: {
    curdetail() {
      return this.$store.state.home.menu.filter(
        (item) => item.type === this.kind
      )[0];
    },
  },
};
</script>

<style lang="scss">
</style>
