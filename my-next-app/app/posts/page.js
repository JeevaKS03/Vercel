// app/page.js
export default async function Home() {
    // Initialize the database (run this only once)
    await fetch('http://localhost:3000/api/init', { cache: 'no-store' });
  
    // Fetch posts
    const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });
    const posts = await res.json();
    console.log(posts); 
  
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
