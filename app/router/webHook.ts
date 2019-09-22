'use strict';
import { Application } from 'egg';
module.exports = (app: Application) => {
    const { router, controller } = app;
    router.get('/blog/blogUpdate', controller.webHook.blogUpdate);
};
