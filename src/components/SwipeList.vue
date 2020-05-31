<template>
  <div class="swipe-list">
    <van-swipe style="width:100%;height: 0.42rem;"
      :duration="800"
      :autoplay="3000" vertical 
      :show-indicators="false" 
      :touchable="false">
      <van-swipe-item class="swipe-item" v-for="(prize, index) in getList" :key="index">
        <img class="img" src="../assets/jackMa.jpg">
        <div class="text">
          恭喜 {{prize.userName}} 获得{{prize.name}}
        </div>
      </van-swipe-item>
  </van-swipe>
  </div>
</template>

<script>

export default {
  name: 'SwipeList',
  props: ['list'],
  computed:{
    getList(){
      // 模拟他人中奖信息
      let list = [
        {
          userName: 'tx1号',
          name: '学习笔记本',
        },
        {
          userName: 'tx2号',
          name: '学习g钢笔',
        },
        {
          userName: 'mrhuang',
          name: 'c++',
        }
      ]
      return list.concat(this.list)
    }
  }
}
</script>

<style lang="less" scoped>
.swipe-list{
  position: absolute;
  top: 1.3rem;
  left: 0.05rem;
  width: 1.45rem;
  height: 0.45rem;
  background-color: rgba(0, 0, 0, .7);
  border-radius: 0.2rem;
  color: white;

  font-size: 0.13rem;

  .swipe-item{
    display: flex;
    align-items: center;
    overflow: hidden;

    .img{
      margin-left: 0.05rem;
      width: 0.25rem;
      height: 0.25rem;
      border-radius: 50%;
    }
    .text{
      margin-left: 0.05rem;
      flex: 1;
      height: 0.33rem;
    }
  }
  
}
</style>