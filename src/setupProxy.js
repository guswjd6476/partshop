
// // src/setupProxy.js
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(
//         //createProxyMiddleware('/api', {
// 		createProxyMiddleware('/api',{
// 			   target: 'http://localhost:5000',
//             changeOrigin: true,
//         })
//     );
// };


src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        //createProxyMiddleware('/api', {
		createProxyMiddleware('/api',{
            target: 'https://port-0-partshopback-lme62alhk7lvdw.sel4.cloudtype.app',
            changeOrigin: true,
        })
    );
};