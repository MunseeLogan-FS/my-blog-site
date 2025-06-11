import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const PostCard = ({ markdown }) => {
  const { data, content } = matter(markdown);

  return (
    <article className="prose mx-auto">
      <h1>{data.title}</h1>
      <p className="text-gray-500 text-sm">{data.date}</p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostCard;
