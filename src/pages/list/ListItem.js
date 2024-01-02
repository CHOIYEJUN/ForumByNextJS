'use client'

import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useEffect, useState} from "react";
import styles from "./list.module.css"
export default function ListItem() {

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        const requestOptions = {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json',
            },
        }
        async function fetchData() {
            const response = await fetch(`${apiUrl}/api/getPostData/writePostData`, requestOptions);
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, []);

    const onClick = async (e) => {

        const deleteData = {
            _id : e.target.id,
        }

        const requestOptions = {
            method : "DELETE",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(deleteData),
        }
        try {
            const response = await fetch(`${apiUrl}/api/getPostData/writePostData`, requestOptions);
            if(response.ok){
                e.target.parentElement.style.opacity = 0;
                setTimeout(()=>{
                    e.target.parentElement.style.display = 'none'
                },1000)
            }
        }catch (e) {
            console.log(e.message);
        }
    }

    return(
        <>
            {
                posts.map(data => (
                    <div key={data._id} className={styles.listItem}>
                        <h2>
                            <Link
                                href={`/detail/${data._id}`}
                                //prefetch => 이동 할 페이지의 데이터를 미리 가져옵니다. 옵션으로 키고끄기 가능
                                prefetch={true}

                            >{data.title}</Link>
                        </h2>
                        <p>{data.content}</p>

                        <Link href={`/edit/${data._id}`}>🏗️수정하기</Link>

                        <button
                            onClick={onClick}
                            id={data._id}
                        >🗑️삭제하기</button>
                    </div>
                ))
            }
        </>

    )
}
