"use client";

import { selectPosts } from "@/redux/slices/postsSlice";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import PostView from "@/components/PostView";
const Post = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const posts = useSelector(selectPosts);
  const post = posts.find((post) => String(post.id) === params.id);

  let postView = <></>;

  if (post === undefined) {
    router.push("/404");
  } else {
    postView = <PostView post={post} />;
  }

  return <>{postView}</>;
};

export default Post;
