'use strict';
import { Application } from 'egg';
module.exports = (app: Application) => {
    const { router, controller } = app;
    router.post('/blog/getBlogList', controller.index.getBlogList);
    router.post('/blog/getBlogType', controller.index.getBlogType);
};
