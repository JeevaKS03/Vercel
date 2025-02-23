// app/api/init/route.js
import { MongoClient } from 'mongodb';

//const uri = 'mongodb://localhost:27017'; // Add your MongoDB connection string to .env
const uri = process.env.MONGODB_URI; 
export async function GET() {
  try {
    const client = new MongoClient(uri);
    await client.connect(); // Connect to MongoDB

    const db = client.db('testdb'); // Use the database 'testdb'
    const collection = db.collection('posts'); // Use the collection 'posts'

    // Check if the collection already exists
    const collections = await db.listCollections().toArray();
    const collectionExists = collections.some((col) => col.name === 'posts');

    if (!collectionExists) {
      // If the collection doesn't exist, create it and insert sample data
      await collection.insertMany([
        { title: 'First Post', content: 'This is the first post.' },
        { title: 'Second Post', content: 'This is the second post.' },
      ]);

      await client.close(); // Close the connection
      return Response.json({ message: 'Database initialized with sample data!' });
    } else {
      await client.close(); // Close the connection
      return Response.json({ message: 'Database and collection already exist.' });
    }
  } catch (e) {
    console.error(e);
    return Response.json({ error: 'Failed to initialize data' }, { status: 500 });
  }
}
