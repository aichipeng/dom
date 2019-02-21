# react+webbpack
npm init -y 初始化
npm i webpack --save-dev    安装webpack
npm i webpack-cli --save-dev    安装webpack-cli
npm i react react-dom --save    安装react
# --save-dev 为开发环境依赖包（devDependencies）
# --save 为生产环境依赖包（dependencies）
npm install babel-core babel-loader --save-dev
npm install babel-preset-env babel-preset-react --save-dev
# babel-loader(转化ES6代码) babel-preset-env(解析ES2015+) babel-preset-react(解析JSX)
npm install html-webpack-plugin --save-dev
# html-webpack-plugin自动生成h5页面插件
# webpack.config.js中的配置
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
# webpack-dev-server 热更新    babel-preset-react-hmre 组件热加载
# 配置webpack-dev-server
# webpack.config.js中的配置
# devServer: {
#   historyApiFallback: true,
#   inline: true,
#   contentBase:'./build/',
#   port:'8080',
# },
# .babelrc中的配置
# {
#   "presets": ["react", "es2015"],
#   "env": {
#       "development": {
#       "presets": ["react-hmre"]
#    }
#   }
# }
# package中的配置
# "scripts": {
#   "dev": "webpack-dev-server --hot"
# },