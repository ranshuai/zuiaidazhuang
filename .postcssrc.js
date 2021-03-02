// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {
            // overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
        },
        "postcss-pxtorem": {
            // rootValue: 37.5,
            // // Vant 官方根字体大小是 37.5
            // propList: ['*'],
            // selectorBlackList: ['.norem']
            // 过滤掉.norem-开头的class，不进行rem转换
        }
    }
}
