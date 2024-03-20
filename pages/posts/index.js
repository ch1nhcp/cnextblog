import AllPosts from "../../components/posts/all-posts";

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
  {
    title: "blog4",
    image: "sunset.jpg",
    excerpt: "lorem ipsum dolor sit amet, consectetur adip",
    date: "2024-03-21",
    slug: "img4",
  },
];

function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
export default AllPostPage;
