import BaseController from './baseController';

export default class WebHookController extends BaseController {
    public async blogUpdate() {
        this.logger.info(this, 'have update blog;', '===============');
        const result = await this.service.shell.run_shll('sh', ['../public/updateBlog.sh']);
        this.logger.info(`shell run over, result is ${result}`);
    }
}
