module.exports = {
  devtool: 'source-map', //Source Maps（使调试更容易）
  entry:  __dirname + "/public/main.js", //入口文件
  output: {
    path: __dirname + "/build", //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  devServer: {
    contentBase: __dirname+"",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,	//实时刷新
	host: 'localhost',
	port: 8080
  } 
}