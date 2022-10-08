import Redis from 'ioredis';
import { environment } from './config';

export async function connectRedis() {
    return new Redis(environment.redisURI);
}

export const redisClient = new Redis(environment.redisURI);
