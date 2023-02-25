module.exports = {
    reactStrictMode: true,
    output: 'standalone',
    // Enables hotreloading on Windows
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}
