import { ClickHouse } from 'clickhouse';
import { environment } from "./config";

export const chClient = new ClickHouse({
    url: 'http://localhost',
    port: 8123,
    format: "json",
    raw: false,
    basicAuth: {
        username: environment.clickhouseUsername,
        password: environment.clickhousePassword,
    },
});
