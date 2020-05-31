<template>
<div class="star-list">
  <!-- 左边星星 -->
 <div class="left">
    <i class="iconfont icon-yuan"></i>
    <i class="iconfont icon-xingxing2"></i>
    <i class="iconfont icon-xingxing3 "></i>
    <i class="iconfont icon-yuan"></i>
    <i class="iconfont icon-yuanhuan"></i>
 </div>
  <!-- 右边星星 -->
  <div class="right">
    <i class="iconfont icon-xingxing3"></i>
    <i class="iconfont icon-yuan"></i>
    <i class="iconfont icon-yuanhuan"></i>
    <i class="iconfont icon-xingxing2"></i>
    <i class="iconfont icon-yuan"></i>
  </div>
</div>  
</template>

<script>
export default {
  name:"star-list",

}
</script>

<style lang="less" scoped>
@keyframes aniScale {
  0%{
    transform: scale(0.8);
  }
  25%{
    transform: scale(0.5);
  }
  50%{
    transform: scale(0);
  }
  70%{
    transform: scale(0.5);
  }
  100%{
    transform: scale(1.2);
  }
}
.star-list{
  .left {
    .iconfont{
      position: absolute;
      z-index: 99;
    }
    .iconfont:nth-child(1) {
      left: 0.2rem;
      top: 2rem;
      font-size: 0.3rem;
      color: rgb(134, 134, 212);
      animation: aniScale 1s linear infinite alternate;
    }
    .iconfont:nth-child(2) {
      left: 0.25rem;
      top: 2.4rem;
      font-size: 0.3rem;
      color: rgb(164, 164, 192);
      animation: aniScale 1.2s linear infinite alternate;
    }
    .iconfont:nth-child(3) {
      left: 0.18rem;
      top: 2.8rem;
      font-size: 0.5rem;
      color: white;
      font-weight: 800;
      animation: aniScale 1.5s linear infinite alternate;
    }
    .iconfont:nth-child(4) {
      left: 0.15rem;
      top: 3.2rem;
      font-size: 0.4rem;
      color: yellowgreen;
      animation: aniScale 0.8s linear infinite alternate;
    }
    .iconfont:nth-child(5) {
      left: 0.23rem;
      top: 3.5rem;
      font-size: 0.4rem;
      color: rgb(164, 164, 192);
      animation: aniScale 1.2s linear infinite alternate;
    }
  }
  .right {
    .iconfont{
      position: absolute;
      z-index: 99;
    }
    .iconfont:nth-child(1) {
      left: 3.2rem;
      top: 1.8rem;
      font-size: 0.5rem;
      color: white;
      animation: aniScale 1s linear infinite alternate;
    }
    .iconfont:nth-child(2) {
      left: 3.2rem;
      top: 2.2rem;
      font-size: 0.3rem;
      color: rgb(164, 164, 192);
      animation: aniScale 1.2s linear infinite alternate;
    }
    .iconfont:nth-child(3) {
      left: 3.2rem;
      top: 2.5rem;
      font-size: 0.3rem;
      color: white;
      font-weight: 800;
      animation: aniScale 1.5s linear infinite alternate;
    }
    .iconfont:nth-child(4) {
      left: 3rem;
      top: 2.8rem;
      font-size: 0.5rem;
      color: yellowgreen;
      animation: aniScale 0.8s linear infinite alternate;
    }
    .iconfont:nth-child(5) {
      left: 3.3rem;
      top: 3.2rem;
      font-size: 0.4rem;
      color: yellowgreen;
      animation: aniScale 1.2s linear infinite alternate;
    }
  }
}

</style>