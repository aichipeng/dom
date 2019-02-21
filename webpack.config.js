const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports ={
    //模式
    mode: 'production',
    //入口设置
    entry: {
        main: './src/index.js'
    },
    //出口设置
    output: {
        path: path.resolve(__dirname,'build'),
        filename: '[name].js',
    },
    //插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        })
    ]
}