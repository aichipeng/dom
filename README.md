# react+webbpack
npm init -y 初始化
npm i webpack --save-dev    安装webpack
npm i react react-dom --save    安装react
# --save-dev 为开发环境依赖包（devDependencies）
# --save 为生产环境依赖包（dependencies）
npm install babel-core babel-loader --save-dev
npm install babel-preset-env babel-preset-react --save-dev
# babel-loader(转化ES6代码) babel-preset-env(解析ES2015+) babel-preset-react(解析JSX)
npm install html-webpack-plugin --save-dev
# html-webpack-plugin自动生成h5页面插件
# webpack.config.js配置 
# const HtmlWebpackPlugin = require('html-webpack-plugin');
# module.exports ={
#   plugins: [
#       new HtmlWebpackPlugin({
#           template: './src/index.html', //指定模板路径
#           filename: 'index.html', //指定文件名
#       })
#   ]
# }
npm install webpack-dev-server --save-dev
npm install babel-preset-react-hmre --save-dev
# 