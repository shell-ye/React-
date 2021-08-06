const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function ( app ) {
    // 猫眼
    app.use(createProxyMiddleware('/ajax', {
        target: 'https://m.maoyan.com',
        changeOrigin: true
    }))

    // 猫眼
    app.use(createProxyMiddleware('/api', {
        target: 'https://m.maoyan.com',
        changeOrigin: true
    }))

    // 猫眼
    app.use(createProxyMiddleware('/apollo', {
        target: 'https://i.maoyan.com',
        changeOrigin: true
    }))

    // 猫眼
    app.use(createProxyMiddleware('/mtrade', {
        target: 'https://m.maoyan.com',
        changeOrigin: true
    }))

    // 猫眼
    app.use(createProxyMiddleware('/asgard', {
        target: 'https://i.maoyan.com',
        changeOrigin: true
    }))

    // 猫眼
    app.use(createProxyMiddleware('/searchlist', {
        target: 'https://m.maoyan.com',
        changeOrigin: true
    }))

    // 亲亲网
    app.use(createProxyMiddleware('/index.php', {
        target: 'http://www.qinqin.net',
        changeOrigin: true
    }))
}