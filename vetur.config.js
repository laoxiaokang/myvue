module.exports = {
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: "localhost", 
    port: '8080',
    https: false,
    hotOnly: true, 
    //解决跨域问题
    proxy: {
        '/api': {
            target: 'https://v1.hitokoto.cn', //API服务器的地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },
}

}
