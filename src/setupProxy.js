import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: process.env.REACT_APP_SERVER_URL,
          changeOrigin: true
      })
  )
};