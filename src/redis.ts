import Redis from 'ioredis';

export async function connectRedis() {
    return new Redis(REDIS_URI);
}

export const redisClient = new Redis(REDIS_URI);
