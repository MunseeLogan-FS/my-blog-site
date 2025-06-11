import fm from "front-matter";

export async function loadPosts(slug) {
  try {
    const response = await fetch(`/posts/${slug}.md`);
    if (!response.ok) {
      throw new Error(`Could not fetch /posts/${slug}.md`);
    }

    const rawText = await response.text();
    const parsed = fm(rawText);

    return {
      slug,
      content: parsed.body,
      data: parsed.attributes,
    };
  } catch (error) {
    console.error("Error loading post:", error);
    return {
      slug,
      content: "# 404\nPost not found.",
      data: { title: "Not Found", date: "" },
    };
  }
}
