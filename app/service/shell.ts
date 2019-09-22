import { Service } from 'egg';

export default class Test extends Service {
    /**
     * service demo，根据实际项目更改
     * @param name - 参数
     */
    public async run_shll(cmd: string, args: Array<string>): Promise<string | Error> {
        return new Promise((resolve, reject) => {
            const spawn = require('child_process').spawn;
            const child = spawn(cmd, args);
            let resp: string = "";
            child.stdout.on('data', function(buffer) { resp += buffer.toString(); });
            child.stderr.on('data', (err) => {
                reject(err);
            });
            child.stdout.on('end', function() {
                resolve(resp)
            });
        })
    }
}
