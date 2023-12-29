import {useEffect, useState} from "react";

export default  function List() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/posts');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
        <div className="list-bg">

            {posts.map(data => (
                <div key={data.id} className="list-item">
                    <h2>{data.title}</h2>
                    <p>{data.content}</p>
                </div>
            ))}
        </div>
    )
}
