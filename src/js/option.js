export let imgList = {
  indexSprites: require('../assets/index_sprites.png')
}

/**
 * 模拟奖品数据
 * category: 奖品所属类别，目前存在a、b两类
 * type: 奖品本身类型区分
 * receiveType: 奖品的领取类型，自动发放、领qb、填地址
 */
export function getDefaultPrizeData(){
  return [
    {
      id: '1',
      name: '鱼饼888个',
      category: 'a',
      type: 'yb',
      receiveType: '',
      desc: '企鹅辅导花样礼品随心兑'
    },
    {
      id: '2',
      name: '鱼饼2019个',
      category: 'a',
      type: 'yb',
      receiveType: '',
      desc: '企鹅辅导花样礼品随心兑'
    },
    {
      id: '3',
      name: '5Q币',
      category: 'a',
      type: 'qb',
      receiveType: 'qb',
      desc: 'Q币将发到下方填写的QQ号中'
    },
    {
      id: '4',
      name: '15Q币',
      category: 'a',
      type: 'qb',
      receiveType: 'qb',
      desc: 'Q币将发到下方填写的QQ号中'
    },
    {
      id: '5',
      name: '10Q币',
      category: 'a',
      type: 'qb',
      receiveType: 'qb',
      desc: 'Q币将发到下方填写的QQ号中'
    },
    {
      id: '6',
      name: '腾讯视频会员（1个月）',
      category: 'b',
      type: 'txvip',
      receiveType: '',
      desc: '	请联系辅导老师或客服获取会员兑换码'
    },
    {
      id: '7',
      name: '怪奇鹅卡通笔（2支）',
      category: 'b',
      type: 'pen',
      receiveType: 'address',
      desc: '多动笔，勤记录，知识点掌握更牢固'
    },
  ]
}
/**
 * 抽奖配置
 */
export function getDrawOption() {
  return {
    // 屏幕背景坐标
    screenPosList: [ '0 0', '33% 0', '66.6% 0', '0% 75%', '33% 75%', '66% 75%', '100% 0', '100% 25%', '100% 75%', '100% 100%'],
    // 
    ballList: ['-0.02rem 100%;', '-0.70rem 100%', '-1.37rem 100%', '-2.09rem 100%'],
  }
}

export function getPrizeList(){
  let result = {};
  getDefaultPrizeData().forEach((item) =>{
    result[item.category] = result[item.category] || [];
    result[item.category].push(item);
  })
  return result
}