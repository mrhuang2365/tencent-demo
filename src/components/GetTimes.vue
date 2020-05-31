/** 获取抽奖 机会 */
<template>
<div class="get-times-content">
  <div class="text"></div>
  <div class="arraw"></div>
</div>
</template>
<script>
export default {
  name: 'GetTimes',
  props: {
    times: {
      type:Number,
      default: 0,
    }
  },
}
</script>

<style lang="less" scoped>
.get-times-content{
  width: 100%;
  display: flex;
  justify-content: center;
  transform: scale(1.5);
  margin-top: 0.08rem;

  .text{
    width: 1.25rem;
    height: 0.15rem;
    background: url('../assets/index_sprites.png') no-repeat;
    background-position: -2.52rem -2.62rem;
    background-size: 4.8rem 4rem;
  }
  .arraw{
    width: 0.17rem;
    height: 0.15rem;
    margin-left: 0.04rem;
    background: url('../assets/index_sprites.png') no-repeat;
    background-position: -476px -200px;
    background-size: 488px 413px;

    animation: arrawAni 0.8s linear 2s infinite;
  }
}
@keyframes arrawAni {
  0%{
    transform: translateX(-10%);
  }
  100%{
    transform: translateX(10%);
  }
}
</style>