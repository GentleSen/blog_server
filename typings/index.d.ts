import 'egg';

interface Imysql {
    get(tableName: String): Promise<Any>
    query(sql: String): Promise<Any>
}
interface IredisClient {
    port: string,
    host: string,
    password: string,
    db: string,
}
declare module 'egg' {
    interface Application {
        mysql: Imysql;
        redis: any;
        setRedisData: any,
        getRedisData: any,
        destoryRedisData: any,
    }
    interface EggRedisOptions {
        client: IredisClient,
    }
}