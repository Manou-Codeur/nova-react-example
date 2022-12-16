import { PostModel } from "../models";

const Post = ({ data }: { data: PostModel }) => {
  return (
    <div className="post">
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
