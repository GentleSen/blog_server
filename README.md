### 开启服务指令
1. 本地运行：
npm run clean => npm run local
2. 开启dev服务：
npm run tsc => npm run dev
3. 开启qa服务：
npm run tsc => npm run qa
4. 开启prod服务：
npm run tsc => npm run prod

#### 注：
**根据具体项目修改package.json中的qa,dev,local,prod 中的 --port 以及 --title**
**根据具体项目修改config.qa.ts,config.prod.ts,config.dev.ts,config.local.ts 文件中eureka的SERVICE_NAME**


### 已配插件：
egg-mysql, egg-validate, euraka, egg-redis
已配扩展：
context(对curl进行封装), Application(封装redis处理函数)


### git相关：
项目安装了Commitizen，需执行git commit 时应执行 git sz 来添加相关改动，需全局安装conventional-changelog，conventional-changelog-cli。
