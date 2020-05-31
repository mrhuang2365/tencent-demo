/**
* 该页采用css3 animation做动画效果
**/
<template>
<div class="prize-dialog-content">
  <div class="close-icon" @click="onClose"></div>
  <div class="egg-top"></div>
  <div class="egg-bottom-back"></div>
  <div class="egg-middle">
    <div class="egg-middle-layer">
      <div class="prize-name">
        {{prize.name}}
      </div>
      <div class="prize-desc">
        <div class="icon"></div>
        {{prize.desc}}
      </div>
    </div>
  </div>
  <div class="egg-bottom"></div>
  <div class="btn" @click="receive" v-if="!!this.prize.receiveType" :class="[this.prize.receiveType]"></div>

  <star-list />
</div>  
</template>

<script>
export default {
  name: 'PrizeDialog',
  props: ['prize'],
  components:{
    StarList: () => import('./StarList')
  },
  methods:{
    onClose(){
      this.$emit('close')
    },
    receive(){
      let msg = ''
      if (this.prize.receiveType === 'qb') {
        msg = '领取成功'
      } else if (this.prize.receiveType === 'address') {
        msg = '填写成功'
      }
      this.$toast(msg)
      this.onClose();
    }
  },
}
</script>

<style lang="less" scoped>
.prize-dialog-content{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  z-index: 999;
}
.close-icon{
  position: absolute;
  top: 0.7rem;
  right: 0.5rem;
  width: 0.3rem;
  height: 0.3rem;
  background: url('../assets/dialog.png') no-repeat;
  background-position: -2.08rem 0;
  background-size: 2.38rem 1.8rem;
  z-index: 99;
}
.egg-top{
  width: 2.72rem;
  height: 1.75rem;
  position: absolute;
  top: 2.1rem;
  left: 0.5rem;
  background: url('../assets/b_egg_sprites.png') no-repeat;
  background-position: 0 0;
  background-size: 2.60rem 17rem;
  z-index: 2;
  animation: eggTopAni 0.6s;
  animation-fill-mode: forwards;
}
.egg-bottom-back{
  width: 2.72rem;
  height: 1rem;
  position: absolute;
  top: 3rem;
  left: 0.5rem;
  background: url(/static/img/b_egg_sprites.7b67e5c.png) no-repeat;
  background-position: 0 -3.62rem;
  background-size: 2.60rem 17rem;
}
.egg-bottom{
  width: 2.72rem;
  height: 1.75rem;
  position: absolute;
  top: 3.14rem;
  left: 0.5rem;
  z-index: 1;
  background: url('../assets/b_egg_sprites.png') no-repeat;
  background-position: 0px -1.9rem;
  background-size: 2.60rem 17rem;
}
.egg-middle{
  position: absolute;
  top: 1.9rem;
  left: 0.8rem;
  width: 2.12rem;
  height: 1.9rem;
  overflow: hidden;

  .egg-middle-layer{
    width: 100%;
    height: 100%;
    background: url('../assets/dialog.png') no-repeat;
    background-position: -0.09rem 0;
    background-size: 2.62rem 1.88rem;
    transform: translateY(100%);
    animation: eggMiddleAni 0.5s linear 0.1s;
    animation-fill-mode: forwards;
    overflow: hidden;
  }
  .prize-name{
    width: 90%;
    height: 0.5rem;
    margin: 0 auto;
    margin-top: 0.7rem;
    font-size: 0.16rem;
    color: #e4201d;
    text-align: center;
    overflow: hidden;
  }
  .prize-desc{
    width: 90%;
    margin: 0 auto;
    margin-top: 0.2rem;
    font-size: 0.15rem;
    color: rgb(104, 91, 73);
    text-align: center;
    position: relative;
    text-indent: 0.22rem;

    .icon{
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      background: url('../assets/dialog.png') no-repeat;
      transform: scale(1.3);
      background-position: -247px -173px;
      background-size: 262px 188px;
    }
  }
}
.btn{
  width: 1.8rem;
  height: 0.4rem;
  position: absolute;
  top: 5.1rem;
  left: 0.97rem;
  transform: scale(1.3);

  &.qb{
    background: url('../assets/toBtn.png') no-repeat;
    background-position: 0.13rem -3.7rem;
    background-size: 1.8rem auto;
  }
  &.address{
    background: url('../assets/toBtn.png') no-repeat;
    background-position: 0.13rem -2.48rem;
    background-size: 1.80rem auto;
  }
}
@keyframes eggTopAni {
  0%{ }
  to {
    top: 0.8rem;
    z-index: 0;
  }
}
@keyframes eggMiddleAni {
  0%{}
  to {
    display: block;
    transform: translateY(0);
    z-index: 3;
  }
}
</style>