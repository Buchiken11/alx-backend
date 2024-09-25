import { createClient } from "redis";

async function startRedis() {
    const client = await createClient();
    client.on('error', (err) => {
        console.log('Redis client not connected to the server: ERROR_MESSAGE');
    });
    client.on('connect', () => {
        console.log('Redis client connected to the server');
    });
    await client.connect();

    await client.set('key', 'value');
    const value = await client.get('key');
    console.log('Value:', value);
    await client.disconnect();
}
startRedis();
