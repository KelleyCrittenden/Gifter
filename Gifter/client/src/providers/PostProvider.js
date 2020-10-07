// This providers the state value of the posts array, as well as methods to fetch all posts and add a new post. 
// Note that the urls we are making requests to are relative urls--they don't have anything like https://localhost:5001/api/posts. 
// This is a benefit of adding the proxy attribute in our package.json file.

import React, { useState } from "react";

// Step 1, create the box. Don't touch
export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("/api/post")
            .then((res) => res.json())
            .then(setPosts);
    };

    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    // function to get a single post
    const getPost = (id) => {
        return fetch(`/api/post/GetPostByIdWithComments/${id}`).then((res) => res.json());
    };

    // Box full of functions to use in other files
    // prop drilling
    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, getPost }}>
            {props.children}
        </PostContext.Provider>
    );
};