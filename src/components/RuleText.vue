<template>
  <div class="rule-text">
    <div class="top">
      <div class="title"></div>
    </div>
    <div class="content">
      <div class="item" v-for="(item, index) in textList" :key="index">
        <div class="index" :class="['index'+ (index+1),]"></div>
        <div class="right">
          <div class="text">{{item.text}}</div>
          <div class="line" v-if="index !== textList.length -1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RuleText',
  data(){
    return {
      textList: [
        {
          text: '已购买暑假或秋季系统班课的用户，完成购买后可以马上参与抽奖，中奖率100%。'
        },
        {
          text: '抽奖次数由订单数决定，暑秋联报算两个订单。'
        },
        {
          text: '如有退款，则对应的抽奖机会和奖品一律无效。'
        },
        {
          text: '所有奖品将在4月15日，统一开始发货'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.rule-text{
  width: 89%;
  // height: 4.5rem;
  margin: 0 auto;
  margin-top: 0.4rem;

  .top{
    height: 0.9rem;
    background: url('../assets/index_sprites.png') no-repeat;
    background-position: -3.75rem 0;
    background-size: 213% 681%;
    overflow: hidden;
    padding-top: 0.36rem;

    .title{
      width: 1.2rem;
      height: 0.35rem;
      margin: 0 auto;
      background: url('../assets/index_sprites.png') no-repeat;
      background-position: -6.5rem -4.45rem;
      background-size: 660% auto;
    }
  }
  .content{
    background-color: rgb(244, 237, 225);
    padding-bottom: 0.24rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;

    width: 100%;
    font-size: 0.155rem;
    line-height: 0.25rem;
    color: rgb(104, 91, 73);
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    .item{
      display: flex;
      flex: 1;
      margin-bottom: 0.16rem;

      .index {
        width: 0.3rem;
        height: 0.3rem;
        margin-right: 0.08rem;
        background: url('../assets/index_sprites.png') no-repeat;
        background-position: -7.03rem -5.21rem;
        background-size: 8.6rem auto;
      }
      .index1{
        background-position: -7.03rem -5.21rem;
        background-size: 8.6rem auto;
      }
      .index2{
        background-position: -7.33rem -5.21rem;
        background-size: 8.6rem auto;
      }
      .index3{
        background-position: -7.62rem -5.21rem;
        background-size: 8.6rem auto;
      }
      .index4{
        background-position: -7.92rem -5.21rem;
        background-size: 8.6rem auto;
      }
      .right {
        flex:1;

        .line{
          margin-top: 0.16rem;
          height: 4px;
          background: linear-gradient(to right, #eddcc0, #eddcc0 16px, transparent 16px, transparent);
          background-size: 28px 100%;
        }
      }
    }
  }
  
}
</style>