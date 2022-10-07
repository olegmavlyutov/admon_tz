require('dotenv')
    .config();

const {
    REDIS_URI = 'redis://localhost:6379/1',
    CLICKHOUSE_DATABASE = 'stats',
    CLICKHOUSE_USERNAME = 'default',
    CLICKHOUSE_PASSWORD = '',
} = process.env;

module.exports = {
    REDIS_URI,
    CLICKHOUSE_DATABASE,
    CLICKHOUSE_USERNAME,
    CLICKHOUSE_PASSWORD,
}
