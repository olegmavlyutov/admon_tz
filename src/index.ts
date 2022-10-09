import axios from "axios";
import { redisClient } from './redis';
import { environment } from './config';
import { insertToClickhouse } from "./insertToClickhouse";

async function buffer(url: string, tableToInsertName?: string): Promise<void> {
    const redisBufferData: string[] = await redisClient.lrange('myList', 0, -1);

    // при достижении максимального значения таймаута, произвести запись в clickhouse
    setTimeout(async () => {
        await insertToClickhouse(redisBufferData, tableToInsertName);

        await redisClient.del('myList');
    }, environment.bufferMaxTimeout * 1000);

    const bufferLength: number = await redisClient.llen('myList');
    console.log({ bufferLength });

    // как только буфер доходит до максимального значения своего размера
    if (bufferLength === environment.bufferMaxSize) {
        await insertToClickhouse(redisBufferData, tableToInsertName);

        await redisClient.del('myList');
    }

    const { data: jsonData } = await axios.get(url);

    await redisClient.rpush('myList', JSON.stringify(jsonData));
}

buffer('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
    .catch((e) => {
        console.log(e);

        process.exit(1);
    })
