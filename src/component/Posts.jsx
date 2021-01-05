import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../store/postSlice";

function Posts() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state);
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  let content;

  if (loading) {
    content = <div>Loading</div>;
  } else if (error) {
    content = <div style={{ color: "red" }}>{error.message}</div>;
  } else if (posts) {
    content = posts.map((post) => <div key={post.id}>{post.title}</div>);
  }

  return <div>{content}</div>;
}

export default Posts;
