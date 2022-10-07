import { ClickHouse } from 'clickhouse';

export const chClient = new ClickHouse({
    url: 'http://localhost',
    port: 8123,
    format: "json",
    raw: false,
    basicAuth: {
        username: 'default',
        password: '',
    },
});
