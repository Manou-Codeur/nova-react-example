/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useEffect, useState } from "react";

import Post from "./components/posts.component";
import User from "./components/users.component";
import { PostModel, UserModel } from "./models";

const API = {
  POSTS: "https://jsonplaceholder.typicode.com/posts",
  USERS: "https://jsonplaceholder.typicode.com/users",
};

const App: FC = () => {
  console.log("rendered3");

  const [activeLink, setActiveLink] = useState<"posts" | "users">("posts");
  const [users, setUsers] = useState<UserModel[] | null>(null);
  const [posts, setPosts] = useState<PostModel[] | null>(null);

  useEffect(() => {
    console.log(process.env.TEST);

    if (activeLink === "posts") {
      fetch(API.POSTS, {
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        .then((posts) => setPosts(posts))
        .catch((err) => console.log(err));
    } else {
      fetch(API.USERS, {
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        .then((users) => setUsers(users))
        .catch((err) => console.log(err));
    }

    const tst = process.env.MY_API;
    console.log(tst);

    fetch("http://localhost:4000/")
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [activeLink]);

  return (
    <>
      <nav>
        <a
          onClick={() => setActiveLink("posts")}
          className={activeLink === "posts" ? "active" : undefined}
        >
          Post test
        </a>
        <a
          onClick={() => setActiveLink("users")}
          className={activeLink === "users" ? "active" : undefined}
        >
          Users
        </a>
      </nav>

      <main>
        {activeLink === "posts"
          ? posts?.map((post) => <Post key={post.id} data={post} />)
          : users?.map((user) => <User key={user.id} data={user} />)}
      </main>
    </>
  );
};

export default App;
