<template>
  <div class="portal">
    <div class="logo">Share It</div>
    <div class="desc">晒晒你的生活</div>
  </div>
</template>

<script>
export default {
  name: "Portal",
};
</script>

<style lang="scss" scoped>
.portal {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(https://share-it.oss-cn-beijing.aliyuncs.com/ShareIt/web/bg/portal-bg.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: left;
  .logo {
    position: absolute;
    top: 24px;
    left: 24px;
    font-size: 40px;
  }
  .desc {
    position: absolute;
    top: 70px;
    left: 24px;
    font-size: 32px;
  }
}
</style>
