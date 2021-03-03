// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem, Divider, Icon, GoodsAction, GoodsActionButton, GoodsActionIcon, Sku, Search, Tab, Tabs, Sidebar, SidebarItem } from 'vant'

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Divider);
Vue.use(Icon);

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Sku);

Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);