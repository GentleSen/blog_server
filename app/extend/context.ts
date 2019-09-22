'use strict';
module.exports = {
    /**
     * 发送get请求
     * @param url get请求的url
     * @param userName 发送请求的用户名，打日志使用
     * @return get请求返回的json
     */
    async getCurl(url: string, userName: string): Promise<object> {
        const { logger } = this;
        logger.info(`get 请求，url 为： ${url}, 请求用户为： ${userName}`);
        const result = await this.curl(url, {
            timeout: 40000,
            dataType: 'json',
        });
        const { data } = result;
        return data;
    },
    /**
     * 发送post请求
     * @param url 发送post请求的url
     * @param params 发送post请求的参数
     * @param userName 发送post请求的用户名，打日志使用
     * @return post请求返回的数据
     */
    async postCurl(url: string, params: any, userName: string): Promise<object> {
        const { logger } = this;
        logger.info(`post 请求, url 为： ${url}, 参数为 ： ${JSON.stringify(params)}, 操作用户为： ${userName}`);
        const tempJson = {};
        for (const key in params) {
            if (params[key]) {
                tempJson[key] = params[key];
            }
        }
        const result = await this.curl(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            data: tempJson,
            timeout: 40000,
            dataType: 'json',
        });
        const { data } = result;
        return data;
    },
    /**
     * 发送自定义请求
     * @param url 发送请求的url
     * @param config 发送请求的配置
     * @param userName 用户名，打日志使用
     * @return 请求返回的数据
     */
    async myCurl (url: string, config: object, userName: string): Promise<object> {
        this.logger.info(`Http 请求, url 为： ${url}, 操作用户为： ${userName}`);
        const result = await this.curl(url, config);
        const { data } = result;
        return data;
    },
};
