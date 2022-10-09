export interface ConfigInterface {
    /**
     * URI адрес Redis - пример в .env-example
     */
    redisURI: string;


    /**
     * URL адрес clickhouse
     */
    clickhouseURL: string;

    /**
     * Порт clickhouse
     */
    clickhousePort: number;

    /**
     * Название базы в clickhouse
     */
    clickhouseDatabase: string;

    /**
     * Имя для авторизации в clickhouse
     */
    clickhouseUsername: string;

    /**
     * Пароль для авторизации в clickhouse
     */
    clickhousePassword: string;


    /**
     * Максимальный размер буфера
     */
    bufferMaxSize: number;

    /**
     * Максимальное время перед записью из буфера в секундах
     */
    bufferMaxTimeout: number;
}
