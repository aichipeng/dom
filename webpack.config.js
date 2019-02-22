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
                test: /\.js|jsx$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ["env", "react"]
                    // }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {   //使用css配置
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                //使用less配置
                test: /\.less$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'images/[hash].[ext]',//所有图片在一个目录
                        }
                    }
                ]
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