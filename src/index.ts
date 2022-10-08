import { chClient } from './chClient';
import { redisClient } from './redis';

async function buffer(url: string, tableToInsertName?: string) {
    const bufferLength = await redisClient.llen('myList');
    console.log({ bufferLength });

    await redisClient.del('myList');

    const toRedisData1 = { abc: 'hello1' };
    const toRedisData2 = { abc: 'hello2' };
    const toRedisData3 = { abc: 'hello3' };

    await redisClient.rpush('myList', JSON.stringify(toRedisData1));
    await redisClient.rpush('myList', JSON.stringify(toRedisData2));
    await redisClient.rpush('myList', JSON.stringify(toRedisData3));

    const redisGetTest = await redisClient.lrange('myList', 0, -1);
    const redisToJSON = redisGetTest.map((r) => JSON.parse(r));

    console.log({ redisToJSON });
    // const insertQuery = `INSERT INTO ${tableToInsertName || 'test_temp'} (mark) VALUES (1)`
    //
    // const selectQuery = 'SELECT * FROM test_temp'
    //
    // const data = await chClient
    //     .query(selectQuery)
    //     .toPromise();
    //
    // console.log({ data });
}

buffer('https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1')
    .catch((e) => {
        console.log(e);

        process.exit(1);
    })
