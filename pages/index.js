import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/featured-post";

const DUMMY_POSTS = [
  {
    title: "blog1",
    image: "sunset.jpg",
    excerpt: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2024-03-21",
    slug: "img1",
  },
  {
    title: "blog2",
    image: "sunset.jpg",
    excerpt: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2024-03-21",
    slug: "img2",
  },
  {
    title: "blog3",
    image: "sunset.jpg",
    excerpt: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2024-03-21",
    slug: "img3",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
