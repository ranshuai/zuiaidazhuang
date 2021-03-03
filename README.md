# zuiaidazhuang

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
### git关联远程仓库
git 将本地项目关联到远程仓库
git remote add origin https://github.com/ranshuai/zuiaidazhuang.git

### 默认样式
 body 背景颜色 F5F5F5

1级字体颜色 333333

2级字体颜色 575757

商品列表区域padding 10

进店字体颜色 f2786b

### 
.babelrc
1. "babel-plugin-import": "^1.13.3", 解决 .babelrc文件 import 报错的问题
2. 
{
    "plugins": [],  // 插件配置
    "presets": []   // 预设配置
}
  [
        "import",
        {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
        },
        "vant"
  ]
　plugin ： 将某一种需要转化的代码，转为浏览器可以执行代码。

3.rem适配
 "postcss-pxtorem": {
            rootValue: 37.5,
            // Vant 官方根字体大小是 37.5
            propList: ['*'],
            // selectorBlackList: ['.norem']
            // 过滤掉.norem-开头的class，不进行rem转换
        }
4.  引入scss文件 通过@import ~ (注意区分中文) 表示你后面的值为 alias 然后就会去 webpack alias 配置中找相应的值, 然后拼接成最后的地址
    @import '～@/styles/index.scss';


    ### 业务
    1.
    2.商品详情页
    2.1 <van-sku  商品规格组件
    2.2 <van-goods-action> 加入购物车组件