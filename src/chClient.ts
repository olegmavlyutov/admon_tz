import { ClickHouse } from 'clickhouse';
import { environment } from "./config";

export const chClient = new ClickHouse({
    url: environment.clickhouseURL,
    port: environment.clickhousePort,
    format: 'json',
    raw: false,
    basicAuth: {
        username: environment.clickhouseUsername,
        password: environment.clickhousePassword,
    },
});
