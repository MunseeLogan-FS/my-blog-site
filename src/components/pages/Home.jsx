import { useEffect, useState } from "react";
import { Link } from "react-router";
import { loadAllPosts } from "../util/loadAllPosts";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadAllPosts().then(setPosts);
  }, []);

  console.log("home", posts);

  return (
    <main>
      <h1>Tech Blog</h1>
      <ul>
        {posts.map(({ slug, data }) => (
          <li key={slug}>
            <Link to={`/post/${slug}`}>
              <h2>{data.title}</h2>
            </Link>
            <p>{data.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
