import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DIRECT_URL,
});

async function testConnection() {
  try {
    await client.connect();
    console.log('✅ Successfully connected to the Supabase database!');
    const res = await client.query('SELECT NOW()');
    console.log('Database time:', res.rows[0].now);
  } catch (err) {
    console.error('❌ Connection error', err.stack);
  } finally {
    await client.end();
  }
}

testConnection();
