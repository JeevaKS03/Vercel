// app/api/posts/route.js
import { MongoClient } from 'mongodb';

//const uri = 'mongodb://localhost:27017'; // Add your MongoDB connection string to .env
const uri = process.env.MONGODB_URI; 

export async function GET() {
  try {
    const client = new MongoClient(uri);
    await client.connect(); // Connect to MongoDB

    const db = client.db('testdb'); // Use the 'testdb' database
    const posts = await db.collection('posts').find({}).toArray(); // Fetch all posts

    await client.close(); // Close the connection

    return Response.json(posts);
  } catch (e) {
    console.error(e);
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
