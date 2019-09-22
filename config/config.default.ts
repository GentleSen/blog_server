import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;
    config.keys = appInfo.name + '_1551345741472_6076';
    // 设置egg服务能收到的请求的类型
    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };
    config.middleware = [ 'onerror' ];
    config.onerror = {
        enable: true,
    };
    config.security = {
        csrf: {
            queryName: '_csrf',
            bodyName: '_csrf',
            headerName: '_csrf',
            cookieName: '_csrf',
            enable: false,
        },
    };
    return {
        ...config,
        ...bizConfig,
    };
};
