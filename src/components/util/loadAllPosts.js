import { loadPosts } from "./loadPosts";

const slugs = ["firstPost", "secondPost", "thirdPost", "fourthPost"];

// Loads all posts defined in the slug list

export async function loadAllPosts() {
  const posts = await Promise.all(slugs.map((slug) => loadPosts(slug)));
  console.log(posts);

  // Filter out any failed or incomplete posts
  const validPosts = posts.filter(
    (post) => post && post.data && post.data.date
  );

  // Sort safely by date descending
  return validPosts.sort(
    (a, b) => new Date(b.data.date) - new Date(a.data.date)
  );
}
