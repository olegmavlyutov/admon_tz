import { chClient } from '../src/chClient';

async function main(): Promise<void> {
    const dropQuery = 'DROP TABLE IF EXISTS test_temp';

    await chClient
        .query(dropQuery)
        .toPromise();

    console.log('table dropped!');
}

main()
    .catch((e) => {
        console.log(e);

        process.exit(1);
    });
