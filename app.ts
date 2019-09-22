module.exports = app => {
    // 收到请求时输出url
    app.on('request', ctx => {
        ctx.logger.info(ctx.request.url);
    });
};
