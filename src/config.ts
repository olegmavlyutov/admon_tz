import { ConfigInterface } from '../interfaces/config.interface';

export const environment: ConfigInterface = {
    redisURI: process.env.REDIS_URI,

    clickhouseURL: process.env.CLICKHOUSE_URL,
    clickhousePort: process.env.CLICKHOUSE_PORT,
    clickhouseDatabase: process.env.CLICKHOUSE_DATABASE,
    clickhouseUsername: process.env.CLICKHOUSE_USERNAME,
    clickhousePassword: process.env.CLICKHOUSE_PASSWORD,
};
