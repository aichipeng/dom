const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //模式
    mode: 'production',
    //项目入口
    entry: {
        main: './src/index.js'
    },
    //出口设置
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    //配置模块使用的加载器
    module: {
        rules: [
            {
                test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ["env", "react"]
                    // }
                }]
            }
        ]
    },
    //sever设置
    devServer: {
        historyApiFallback: true,
        inline: true,
        contentBase: './build/',
        port: '8080',
    },
    //插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', //指定模板路径
            filename: 'index.html', //指定文件名
        })
    ]
}