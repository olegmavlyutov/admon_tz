import { chClient } from './chClient';
import { redisClient, connectRedis } from './redis';

async function buffer() {
    const query = `CREATE TABLE test_temp (
    mark String
  )
  ENGINE=MergeTree()
  ORDER BY (mark)`;

    const insertQuery = 'INSERT INTO test_temp (mark) VALUES (1)'

    const selectQuery = 'SELECT * FROM test_temp'

    const dropQuery = 'DROP TABLE IF EXISTS test_temp';

    const data = await chClient.query(selectQuery).toPromise();

    console.log({ data });
}

buffer()
    .catch((e) => {
        console.log(e);

        process.exit(1);
    })
