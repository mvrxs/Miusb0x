import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'Miusisbox';

export async function connectToDatabase() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to the database');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}
