<template>
<div class="prize-list-content">
  <div class="top"></div>
  <div class="list">
    <div class="list-item" v-for="(prize, index) in getList" :key="index">
      <div class="date">{{prize.dateStr}}</div>
      <div class="text">恭喜你获得</div>
      <div class="prize-name">{{prize.name}}</div>
    </div>
  </div>
  <div class="btn" v-if="btnType" :class="[btnType]" @click="onClick"></div>
</div>
</template>

<script>
import {formatDate} from '@/util/util'
export default {
  name: 'PrizeList',
  props: ['list'],
  methods:{
    onClick(){
      if (this.btnType === 'all' || this.btnType === 'address') {
        this.$toast('填写成功')
        return
      }
      if (this.btnType === 'qb') {
        this.$toast('领取成功')
        return
      }
    }
  },
  computed:{
    getList(){
      return this.list.map((prize) => {
        prize.dateStr = formatDate(prize.created)
        return prize
      })
    },
    btnType(){
      const addressItem = this.list.find((item) => item.receiveType === 'address')
      const qbItem = this.list.find((item) => item.receiveType === 'qb')
      if (addressItem && qbItem) {
        return 'all'
      }
      if (addressItem) {
        return 'address'
      }
      if (qbItem) {
        return 'qb'
      }
    }
  }
}
</script>
<style lang="less" scoped>
.prize-list-content{
  width: 90%;
  height: auto;
  padding-top: 0.69rem;
  padding-bottom: 0.3rem;
  margin: 0 auto;
  margin-top: 0.4rem;
  border-radius: 0.5rem;
  background-color: white;
  position: relative;

  .top{
    position: absolute;
    width: 2.1rem;
    height: 0.5rem;
    margin: 0 auto;
    background: url('../assets/index_sprites.png') no-repeat;
    background-position: -3.74rem -4.06rem;
    background-size: 7.15rem auto;
    left: 50%;
    top: 0;
    transform: translate3d(-50%, -50%, 0);
  }
  .list{
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 0.173rem;
    min-height: 1.5rem;
    max-height: 3rem;

    .list-item{
      display: flex;
      align-items: center;
      margin-bottom: 0.18rem;

      .date{
        margin-left: 0.2rem;
      }
      .text{
        margin-left: 0.2rem;
      }
      .prize-name{
        margin-left: 0.2rem;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .btn{
    margin: 0 auto;
    margin-top: 0.12rem;
    width: 1.8rem;
    height: 0.4rem;
    transform: scale(1.5);
  
    &.qb{
      background: url('../assets/toBtn.png') no-repeat;
      background-position:0.15rem -3.6rem;
      background-size: 1.75rem auto;
    }
    &.address{
      background: url('../assets/toBtn.png') no-repeat;
      background-position: 0.15rem -2.4rem;
      background-size: 1.75rem auto;
    }
    &.all{
      background: url('../assets/toBtn.png') no-repeat;
      background-position: 0px -3.2rem;
      background-size: 1.75rem auto;
    }
  }
}
</style>