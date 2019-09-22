module.exports = () => {
    return async function onerror(ctx, next) {
        try {
            await next();
        } catch (err) {
            ctx.logger.info(err);
            ctx.body = {
                code: 1,
                message: err.message,
            };
        }
    };
};
