const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports =  function(app){
  const SERVER_URL = require("../src/GlobalVariables").SERVER_URL;
  app.use(
      createProxyMiddleware('/api', {
          target: SERVER_URL,
          changeOrigin: true
      })
  )
};