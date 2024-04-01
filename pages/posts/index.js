import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostPage({ posts }) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
