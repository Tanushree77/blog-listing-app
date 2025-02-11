import BlogList from "@/components/BlogList";
import { getPosts } from "./actions/posts";
import { getUsers } from "./actions/users";

export default async function Home() {
  const initialPosts = await getPosts();
  const users = await getUsers();

  return (
    <div className="bg-white dark:bg-gray-800">
      <h1 className="text-3xl  font-bold mb-6 text-gray-800 dark:text-white"></h1>
      <BlogList initialPosts={initialPosts} users={users} />
    </div>
  );
}
