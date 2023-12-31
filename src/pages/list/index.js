import {useEffect, useState} from "react";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default  function List() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const requestOptions = {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json',
            },
        }
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        async function fetchData() {
            const response = await fetch(`${apiUrl}/api/getPostData/writePostData`, requestOptions);
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

                    <Link href={`/edit/${data._id}`}>🏗️수정하기</Link>
                </div>
            ))}
        </div>
    )
}
