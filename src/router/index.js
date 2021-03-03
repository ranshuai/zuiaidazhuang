import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 基础路由
 * @type { *[] }
 */
const constantRouterMap = [
    {
        path: '/',
        component: () => import('@/views/layouts/index'),
        redirect: '/home',
        meta: {
            title: '首页',
            keepAlive: false
        },
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/home/index'),
                meta: { title: '首页', keepAlive: false,  TabbarShow: true }
            },
            {
                path: '/category',
                name: 'Category',
                component: () => import('@/views/category/index'),
                meta: { title: '分类', keepAlive: false,  TabbarShow: true }
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/index'),
                meta: { title: '关于我', keepAlive: false,  TabbarShow: true }
            },
            {
                path: '/detail',
                component: () => import('@/views/detail/index'),
                meta: {  TabbarShow: false }
            },
            {
                path: '/store',
                component: () => import('@/views/store/index'),
                meta: {  TabbarShow: false }
            }
        ]
    }
]

export default new Router({
    mode: 'history',
    routes: constantRouterMap
})
