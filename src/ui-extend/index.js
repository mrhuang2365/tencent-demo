import 'vant/lib/toast/style';
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';

import Toast from 'vant/lib/toast'
import Swipe from 'vant/lib/swipe'
import SwipeItem from 'vant/lib/swipe-item'

Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);

window.$$Toast = Toast