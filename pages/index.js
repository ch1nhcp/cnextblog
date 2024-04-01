import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/featured-post";
import { getFeaturedPosts } from "../lib/posts-utils";

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
