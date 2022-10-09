import React from "react";
import { useSelector } from "react-redux";

const Post = ({ title, content, id }) => (
  <article className="post-excerpt" key={id}>
    <h3>{title}</h3>
    <p className="post-content">{content.substring(0, 100)}</p>
  </article>
);

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          content={post.content}
          title={post.title}
          id={post.id}
        />
      ))}
    </section>
  );
};
