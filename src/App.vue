<template>
  <div id="app">
    <div class="machine-item">
      <machine :draw="draw" />
    </div>
    <swipe-list :list="draw.myPrizeList" />
    <surplus-layer :times="draw.times" />
    <get-times @click.native="draw.getFreeTimes"/>
    <prize-list :list="draw.myPrizeList" />
    <rule-text />
  </div>
</template>

<script>
import draw from './js/draw'
export default {
  name: 'App',
  components: {
    Machine:() =>  import('./components/Machine'),
    SurplusLayer:() =>  import('./components/SurplusLayer'),
    GetTimes:() =>  import('./components/GetTimes'),
    PrizeList:() =>  import('./components/PrizeList'),
    SwipeList:() =>  import('./components/SwipeList'),
    RuleText:() =>  import('./components/RuleText'),
  },
  data(){
    return {
      draw,
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(237, 220, 192, 1);
  position: relative;
  padding-bottom: 0.4rem;
}
.machine-item{
  width: 100%;
  height: 5.18rem;
}
</style>
