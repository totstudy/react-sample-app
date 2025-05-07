import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const POSTS = [
  {
    userId: 1,
    id: 1,
    title:
      "テストタイトル１",
    body: "テスト内容１",
  },
  {
    userId: 1,
    id: 2,
    title: "テストタイトル２",
    body: "テスト内容２",
  },
  {
    userId: 1,
    id: 3,
    title: "テストタイトル３",
    body: "テスト３",
  },
  {
    userId: 1,
    id: 4,
    title: "テストタイトル４",
    body: "テスト内容４",
  },
  {
    userId: 1,
    id: 5,
    title: "テストタイトル５",
    body: "テスト内容５",
  },
];



export const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(POSTS);

  const deletePost = (id) => {
    setPosts(
      posts.filter(p => p.id != id)
    )
  }

  const getSinglePost = (id) => {
    return posts.find(p => p.id == id)
  }

  const savePost = (post) => {
    let newPosts = posts;
    if (post.id) {
      newPosts = posts.map(p => {
        if (p.id == post.id) {
          return post;
        }
        return p;
      })
    } else {
      newPosts.push(post);
    }
    setPosts(newPosts)
  }

  return <StateContext.Provider value={{
    posts,
    deletePost,
    getSinglePost,
    savePost
  }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext)