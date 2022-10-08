import { chClient } from '../src/chClient';

async function main(): Promise<void> {
    const createQuery = `CREATE TABLE IF NOT EXISTS test_temp (
    mark String
  )
  ENGINE=MergeTree()
  ORDER BY (mark)`;

    await chClient
        .query(createQuery)
        .toPromise();
}

main()
    .catch((e) => {
        console.log(e);

        process.exit(1);
    });
