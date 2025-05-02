"use client";

import { useEffect, useState } from "react";

const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return data;
}

export default function Page() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [test, setTest] = useState(false);

    const setData = async() => {
        setLoading(true);
        const data = await getPosts();

        setPosts(data);
        
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    useEffect(()  => {
        setData()
    }, [])

    return (
        <div>
            {loading ? 
            <span>loading</span> :
            <ul>
                {
                    posts.map((post) => 
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </li>
                    )
                }
            </ul>}
        </div>
    )
}