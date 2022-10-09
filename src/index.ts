import { chClient } from './chClient';
import { redisClient } from './redis';
import { environment } from './config';

async function buffer(url: string, tableToInsertName?: string) {
    // await redisClient.del('myList');

    const toRedisData1 = { jsonKey: 'jsonValue' };

    await redisClient.rpush('myList', JSON.stringify(toRedisData1));

    const redisGetTest = await redisClient.lrange('myList', 0, -1);

    console.log({ redisGetTest });
    //
    // const selectQuery = 'SELECT * FROM test_temp'
    //
    // console.log({ data });

    const bufferLength = await redisClient.llen('myList');
    console.log({ bufferLength });

    if (bufferLength >= environment.bufferMaxSize) {
        console.log('max size - write');
        const values = redisGetTest
            .map((s) => JSON.parse(s))
            .map((el) => `(${Date.now()}, '${el.jsonKey}')`)
        console.log({ values });

        const insertQuery = `INSERT INTO ${tableToInsertName || 'test_temp'} (timestamp, jsonKey) VALUES ${values.join(',')}`
        console.log({ insertQuery });

        const data = await chClient
            .query(insertQuery)
            .toPromise();
    }
}

buffer('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
    .catch((e) => {
        console.log(e);

        process.exit(1);
    })
