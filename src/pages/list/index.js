import {useEffect, useState} from "react";
import Link from "next/link";

export default  function List() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/getPostsDataAll');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    return (
        <div className="list-bg">

            {posts.map(data => (
                <div key={data._id} className="list-item">
                    <h2>
                        <Link
                            href={`/detail/${data._id}`}
                            //prefetch => 이동 할 페이지의 데이터를 미리 가져옵니다. 옵션으로 키고끄기 가능
                            prefetch={true}

                        >{data.title}</Link>
                    </h2>
                    <p>{data.content}</p>
                </div>
            ))}
        </div>
    )
}
