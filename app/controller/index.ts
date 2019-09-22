import BaseController from './baseController';
import * as fse from 'fs-extra';
import { Dirent } from 'fs-extra';
import * as moment from 'moment';

const FILE_PATH = '/Users/hesen/Desktop/blog';
const SERVER_LOCATION = 'http://gentlesen.com/blog/'

export default class IndexController extends BaseController {
    // 获取博客列表
    public async getBlogList() {
        const { ctx } = this;
        ctx.validate({
            searshStr: {
                required: false,
                type: 'string'
            }
        });
        const BLOG_LIST_LENGTH = 10;
        const { searshStr = '' } = ctx.request.body;
        const folderArr = await fse.readdir(FILE_PATH, {
            withFileTypes: true,
        });
        let resultArr = [];
        for (let folder of folderArr) {
            // notEnd 文件夹为未完成文件夹, 不予展示
            if (!folder.isFile() && !/^(imgs)|(notEnd)/g.test(folder.name)) {
                let fileList = await fse.readdir(`${FILE_PATH}/${folder.name}`)
                let subResult = fileList.map((file: string) => {
                    if (/^(readMe.text)|(.DS_Store)/g.test(file)) {
                        return '';
                    }
                    const fileArr = file.split('_');
                    const resultJson = {
                        name: fileArr[1] ? fileArr[1].substr(0, fileArr[1].length - 3) : '未命名文件',
                        time: fileArr[0] ? fileArr[0] : moment().format('YYYY-MM-DD'),
                        url: `${SERVER_LOCATION}${fileArr[1]}`
                    }
                    if (searshStr && resultJson.name.indexOf(searshStr) >= 0) {
                        return resultJson;
                    }
                    return resultJson;
                }).filter(item => !!item);
                resultArr = resultArr.concat(subResult);
            }
        }
        const sortArr = (a: {name: string, time: string}, b: {name: string, time: string}) => new Date(a.time).getTime() - new Date(b.time).getTime();
        resultArr.sort(sortArr);
        this.returnData(resultArr.slice(0, BLOG_LIST_LENGTH));
    }
    // 获取博客分类
    public async getBlogType() {
        const folderArr: Array<Dirent> = await fse.readdir(FILE_PATH, {
            withFileTypes: true,
        });
        const resultArr: Array<{ name: string, note: string }> = [];
        for(let folder of folderArr){
            if (!/^(imgs)|(notEnd)/g.test(folder.name) && !folder.isFile()) {
                let typeNotes: string = await fse.readFile(`${FILE_PATH}/${folder.name}/readMe.text`, 'utf-8');
                resultArr.push({
                    name: folder.name,
                    note: typeNotes,
                });
            }
        }
        this.returnData(resultArr);
    }
    // 注册
    public async userRegister() {
    }
    // 登录
    public async userLogin() {
    }
    // 评论
    public async leaveMessage() {
    }
}