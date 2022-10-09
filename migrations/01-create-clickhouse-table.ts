import { chClient } from '../src/chClient';

async function main(): Promise<void> {
    const createQuery = `CREATE TABLE IF NOT EXISTS test_temp (
    timestamp DateTime('Asia/Istanbul'),
    jsonKey String
  )
  ENGINE=MergeTree()
  ORDER BY (timestamp)`;

    await chClient
        .query(createQuery)
        .toPromise();

    console.log('table created!');
}

main()
    .catch((e) => {
        console.log(e);

        process.exit(1);
    });
