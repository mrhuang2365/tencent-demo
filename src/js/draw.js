import {getDrawOption, getPrizeList, getDefaultPrizeData} from './option'

let localTimes= 'DRAW_TIMES'   // 还未使用的抽奖机会
let localSurplus= 'DRAW_SURPLUS' // 已经获得的总抽奖机会
let localPrizeList = 'DRAW_PRIZELIST'   // 本地中奖列表

/**
 * Draw ：管理整个抽奖活动信息、抽奖逻辑、动画效果
 * 1、初始化本地信息
 * 2、管理抽奖次数、获得机会并存储于本地
 * 3、管理中奖逻辑
 * 4、管理抽奖动画
 */
class Draw{
  constructor(){
    window.$$draw = this;

    this.drawOption = getDrawOption();

    this.times = 0;     // 还未使用的抽奖机会
    this.surplus = 0; // 已经获得的总抽奖机会
    this.index = 0;  // 屏幕当前显示的图片下标
    this.ballIndex = -1;  // -1 表示不显示
    this.status = 'available';  // available：可用的， disable；不可用，active：激活（正在抽奖）
    this.myPrizeList = [];
    this.init()
  }
  init(){
    this._initLocalTimes();
    this._initLocalSurplus();
    this._iniLocalPrizeList()

    this._checkoutStatus();
  }
  _iniLocalPrizeList(){
    let list = localStorage.getItem(localPrizeList)
    if (list) {
      this.myPrizeList = JSON.parse(list)
    }
  }
  _setLocalPrizeList(){
    localStorage.setItem( localPrizeList ,JSON.stringify(this.myPrizeList))
  }
  _addLocalPrize(prize){
    this.myPrizeList.push(prize)
    this._setLocalPrizeList();
  }
  _initLocalTimes(){
    this.times = ~~localStorage.getItem(localTimes)
  }
  _setLocalTimes(value){
    this.times = value
    localStorage.setItem(localTimes, value)
  }
  _initLocalSurplus(){
    this.surplus = ~~localStorage.getItem(localSurplus)
  }
  _setLocalSurplus(value){
    this.surplus = value
    localStorage.setItem(localSurplus, value)
  }
  _checkoutStatus(){
    if (this.times <= 0) {
      this.status = 'disable'
    } else {
      this.status = 'available'
    }
  }
  getScreenPostList(){
    return this.drawOption.screenPosList
  }
  getCurrentScreenItem(){
    return this.drawOption.screenPosList[this.index]
  }
  getStatus(){
    return this.status
  }
  setStatus(value){
    this.status = value
  }
  getBallPos(){
    return this.drawOption.ballList[this.ballIndex]
  }
  // 设置落下的小球，随机
  setBallIndex(){
    this.ballIndex = 1;  // 默认绿球
    // 随机选球
    // this.ballIndex = parseInt(Math.random()* this.drawOption.ballList.length )
  }
  // 获取免费的抽奖次数
  getFreeTimes(){
    if (this.surplus >= 6) {
      window.$$Toast('对不起，已经超过上限，无法获得抽奖机会！')
      return
    }
    window.$$Toast('恭喜您获得抽奖机会！')
    this._setLocalSurplus(this.surplus + 1)
    this._setLocalTimes(this.times + 1)
    this._checkoutStatus();
  }
  /**
   * 计算中奖，并返回奖品信息，目前设计为100%中奖，a类：b类 3:1
   */
  computeDrawPrize(){
    /**
     * 1、计算品类中奖：(0-40]区间内取随机，（0,30] 为a类中奖 （30-40]为b类中奖
     * 2、在中奖类型下随机取出中奖奖品
     *  */
    let prizeList = getPrizeList();
    let num = parseInt(Math.random()*40 + 1)
    let list = []
    if (num <= 30) {
      list = prizeList.a
    } else {
      list = prizeList.b
    }
    return {
      ...list[parseInt(Math.random()*list.length)],
      created: new Date().valueOf(),
      userName: '腾讯一号',
    }
  }
  // 重置
  reset(){
    this.index = 0;
    this.ballIndex = -1;
  }
  /**
   * @param {Number} speed  切换图片的速度,单位ms
   * 1、重置当前的显示图片为第一个
   * 2、执行requestAnimationFrame 根据speed速度更新显示图片
   * 3、到最后一张停止
   */
  run(speed){
    let start = null
    var speed = speed || 80;
    return new Promise((resolve, reject) => {
      function _ani(timestamp){
        if (!start) {
          start = timestamp;
        } else if ((timestamp - start) >= speed) {
          this.index++
          start = timestamp;
        }
        if (this.index < this.drawOption.screenPosList.length -1) {
          window.requestAnimationFrame(ani)
        } else {
          resolve()
        }
      }
      let ani = _ani.bind(this);
      window.requestAnimationFrame(ani)
    })
  }
  async onDraw(){
    if (this.status !== 'available') return
    this.setStatus('active')
    this.reset();
    await this.run()
    this._setLocalTimes(this.times - 1)
    this._checkoutStatus();
    this.setBallIndex();
    let prize = this.computeDrawPrize();
    this._addLocalPrize(prize)
    return prize
  }
}

export default new Draw()
