import { ConfigInterface } from '../interfaces/config.interface';
import * as dotenv from 'dotenv';
dotenv.config();

export const environment: ConfigInterface = {
    redisURI: process.env.REDIS_URI,

    clickhouseURL: process.env.CLICKHOUSE_URL,
    clickhousePort: parseInt(process.env.CLICKHOUSE_PORT, 10),
    clickhouseDatabase: process.env.CLICKHOUSE_DATABASE,
    clickhouseUsername: process.env.CLICKHOUSE_USERNAME,
    clickhousePassword: process.env.CLICKHOUSE_PASSWORD,

    bufferMaxSize: parseInt(process.env.BUFFER_MAX_SIZE, 10),
    bufferMaxTimeout: parseInt(process.env.BUFFER_MAX_TIMEOUT, 10),
};
