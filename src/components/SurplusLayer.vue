/** 剩余抽奖 机会 */
<template>
<div class="surplus-content">
  <div class="times" :style="{backgroundPosition: timePostList[times] }"></div>
</div>
</template>

<script>
export default {
  name: 'SurplusLayer',
  props: {
    times: {
      type:Number,
      default: 0,
    }
  },
  data(){
    return {
      timePostList: ['-4.6rem -1.9rem', '-4.65rem -2.5rem', '-2.62rem -3.58rem', '-2.9rem -3.58rem', '-3.15rem -3.58rem', '-3.43rem -3.58rem', '-3.69rem -3.58rem']
    }
  }
}
</script>

<style lang="less" scoped>
.surplus-content{
  position: relative;
  width: 2.18rem;
  height: 0.55rem;
  margin: 0 auto;
  margin-top: 0.16rem;
  background: url('../assets/index_sprites.png') no-repeat;
  background-position: -3.84rem -2.95rem;
  background-size: 336.7% 975%;

  .times{
    width: 0.23rem;
    height: 0.30rem;
    position: absolute;
    background: url('../assets/index_sprites.png') no-repeat;
    // background-position: -449px -168px;
    // background-size: 488px 413px;
    background-size: 5rem 4.6rem;
    left: 62.3%;
    top: 0.1rem;
    transform: scale(1.2);
  }
}
</style>