<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd>
            <nuxt-link to="order">我的订单</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">我的收藏</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">抵用券</nuxt-link>
          </dd>
          <dd>
            <nuxt-link to="order">账户设置</nuxt-link>
          </dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/phoneApp">我的手机</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/center">商家中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="/center">登录商家中心</nuxt-link></dd>
          <dd><nuxt-link to="/center">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="/center">免费手机开店</nuxt-link></dd>
          <dd><nuxt-link to="/center">商家申请开票</nuxt-link></dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="site">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </dl>

          <dl class="food">
            <dt>吃美食</dt>
            <dd>啤酒</dd>
            <dd>炸鸡</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热映影院</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" alt=""
              /></a>
            </dd>
             <dd>
              <a href="#">
                <img src="https://s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" alt=""
              /></a>
            </dd>
             <dd>
              <a href="#">
                <img src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" alt=""
              /></a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>
