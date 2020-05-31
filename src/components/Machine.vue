<template>
<div class="machine-content">
  <div class="screen" :style="{backgroundPosition: draw.getCurrentScreenItem()}"></div>
  <div class="start-button" :class="[draw.getStatus()]" @click="onDraw()"></div>
  <div class="ball-layer">
    <div class="ball-item" v-if="draw.ballIndex !== -1"  :style="{backgroundPosition: this.draw.getBallPos()}"></div>
  </div>

  <prize-dialog v-if="showPrize" :prize="prize" @close="showPrize = false" />
</div>
</template>

<script>
export default {
  props: ['draw'],
  data(){
    return {
      showPrize: false,
      prize: null,
    }
  },
  components:{
    PrizeDialog:() =>  import('./PrizeDialog'),
  },
  methods:{
    wait(time){
      return new Promise((res) => {
        setTimeout(function(){
          res()
        }, time || 1000)
      })
    },
    async onDraw(){
      if (this.draw.status !== 'available') return
      // 执行抽奖操作
      this.prize = await this.draw.onDraw();
      await this.wait(1000) // 等待小球动画执行完毕
      this.showPrize = true;
      console.log('prize:', this.prize)
    }
  },
  created(){

  }
}
</script>

<style lang="less" scoped>
.machine-content{
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../assets/index_sprites.png') no-repeat;
  background-position: -2px -2px;
  background-size: 194% 115%;
  padding-top: 1.2rem;
}
.screen{
  width: 75.2%;
  height: 1.9rem;
  margin: 0 auto;
  position: relative;
  background: url('../assets/animation.png') no-repeat;
  background-position: 0 0;
  background-size: 400% 500%;
}
.start-button{
  position: absolute;
  top: 3.65rem;
  left: 0.82rem;
  width: 0.9rem;
  height: 0.9rem;
  background: url('../assets/btn_sprites.png') no-repeat;
  background-position: 100% 0;
  background-size: 300% 100%;

  &.available{
    background-position: 100% 0;
  }
  &.active{
    background-position: 50% 0;
  }
  &.disable{
    background-position: 0% 0;
  }
}
.ball-layer{
  position: absolute;
  top: 4.14rem;
  right: 0.83rem;
  width:0.93rem;
  height: 0.81rem;
  overflow: hidden;
  
  .ball-item{
    margin: 0 auto;
    width: 0.7rem;
    height: 100%;
    background: url('../assets/index_sprites.png') no-repeat;
    background-position: -2px 100%;
    background-size: 7.23rem 6.20rem;
    animation: ballAni 1s;
  }
}
@keyframes ballAni {
  0%{
    transform: translateY(-100%);
  }
  50%{
    transform: scale(1, 0.8);
  }
  60%{
    transform: scale(1, 0.7);
  }
  70%{
    transform: scale(1, 1);
  }
  100%{
    transform: scale(1.1, 1);
  }
}
</style>