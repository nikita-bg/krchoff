import PageClient from "@/components/PageClient";
import { getAllPosts } from "@/lib/blog";

export default function Page() {
  const latestPosts = getAllPosts().slice(0, 3);
  return <PageClient posts={latestPosts} />;
}
