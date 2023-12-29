import {useEffect, useState} from "react";

export default  function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        }

        fetchData();
    }, []);


    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );

}
