import { Controller } from 'egg';

export default class HomeController extends Controller {
    /**
     * 返回正确数据
     * @param data 给前端返回的数据
     */
    public async returnData(data: any = null) {
        const { ctx } = this;
        ctx.body = {
            message: '请求成功',
            code: 0,
            result: data,
        };
    }
}
