import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { loadPosts } from "../util/loadPosts";

const Post = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState({});

  useEffect(() => {
    loadPosts(slug).then(({ content, data }) => {
      setContent(content);
      setMeta(data);
    });
  }, [slug]);

  return (
    <article className="prose mx-auto p-6">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">{meta.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Post;
