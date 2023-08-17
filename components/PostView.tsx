const PostView = ({ post }: { post: { title: string; body: string } }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostView;
