
// // src/setupProxy.js
// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//     app.use(
//         //createProxyMiddleware('/api', {
// 		createProxyMiddleware('/api',{
// 			   target: 'http://localhost:5000/',
//             changeOrigin: true,
//         })
//     );
// };


// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        //createProxyMiddleware('/api', {
		createProxyMiddleware('https://web-partshop-lme62alhk7lvdw.sel4.cloudtype.app/api',{
            target: 'partshopback:5000/',
            changeOrigin: true,
        })
    );
};