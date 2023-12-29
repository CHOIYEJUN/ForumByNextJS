import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Detail (props) {
    const [posts, setPosts] = useState("");
    const router = useRouter(); // useRouter 훅을 사용합니다.
    console.log(props.data);

    return(
        <div>
            <h1>상세페이지</h1>
            <h1>{props.data.title}</h1>
            <h1>{props.data.content}</h1>
        </div>

    );
}
export async function getServerSideProps(context) {
    const { id } = context.params;
    let  data = null;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    async function fetchData() {
        const response = await fetch(`${apiUrl}/api/getPostData?id=${id}`);
        data = await response.json();
    }
    await fetchData();

    return { props: { data } };
}
