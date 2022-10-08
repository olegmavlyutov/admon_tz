import { chClient } from './chClient';
import { redisClient, connectRedis } from './redis';

async function buffer(tableToInsertName?: string) {
    const insertQuery = `INSERT INTO ${tableToInsertName || 'test_temp'} (mark) VALUES (1)`

    const selectQuery = 'SELECT * FROM test_temp'

    const data = await chClient
        .query(selectQuery)
        .toPromise();

    console.log({ data });
}

buffer()
    .catch((e) => {
        console.log(e);

        process.exit(1);
    })
