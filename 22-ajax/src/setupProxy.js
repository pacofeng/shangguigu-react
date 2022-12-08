const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    // 遇见 /api1 前缀的请求，就会触发该代理配置
    createProxyMiddleware('/api1', {
      // 请求转发给谁
      target: 'http://localhost:5000',
      // 控制服务器收到的请求头中Host字段的值
      changeOrigin: true,
      // 重写请求路径，发送给服务器的请求去掉 /api1
      pathRewrite: {
        '^/api1': '',
      },
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {
        '^/api2': '',
      },
    })
  );
};
