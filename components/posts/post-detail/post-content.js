import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import styles from "react-markdown";
import Markdown from "react-markdown";

const DUMMY_POSTS = {
  slug: "img1",
  title: "blog1",
  image: "sunset.jpg",
  date: "2024-03-21",
  content: "# blog content using markdown",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <Markdown>{DUMMY_POSTS.content}</Markdown>
    </article>
  );
}

export default PostContent;
