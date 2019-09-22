import { Application } from 'egg';

export default (app: Application) => {
    require('./router/index')(app);
    require('./router/webHook')(app);
};
