"use client";

import { useSelector } from "react-redux";
import { selectPosts } from "@/redux/slices/postsSlice";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostItem = ({ post }: { post: Post }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/posts/${post.id}`);
  };
  return (
    <div onClick={handleClick}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

const PostList = () => {
  const posts = useSelector(selectPosts);
  const postList = posts.map((post) => <PostItem key={post.id} post={post} />);

  return <div>{postList}</div>;
};

export default PostList;
