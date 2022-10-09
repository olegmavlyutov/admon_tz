export interface ConfigInterface {
    redisURI: string;

    clickhouseURL: string;
    clickhousePort: number;
    clickhouseDatabase: string;
    clickhouseUsername: string;
    clickhousePassword: string;

    bufferMaxSize: number;
    bufferMaxTimeout: number;
}
