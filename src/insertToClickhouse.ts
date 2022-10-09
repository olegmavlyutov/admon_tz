import { chClient } from './chClient';
import * as sqlString from 'sqlstring';

const escape = (str) => sqlString.escape(str || '');

export async function insertToClickhouse(data, tableToInsertName) {
    const values = data
        .map((el) => `(${Date.now()}, ${escape(el)})`)

    const insertQuery = `INSERT INTO ${tableToInsertName || 'test_temp'} (timestamp, jsonData) VALUES ${values.join(',')}`

    await chClient
        .query(insertQuery)
        .toPromise();
}
