import {useEffect, useState} from "react";
import styles from './edit.module.css'
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function Edit(props) {

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        setTitle(props.data.title);
        setContent(props.data.content);
    }, []);

    const onChange = (e) => {

        if(e.target.name === "title"){
            setTitle(e.target.value);
        }
        if(e.target.name === "content"){
            setContent(e.target.value);
        }
    }

    const onSubmit = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const postData = {
            _id : props.data._id,
            title : title,
            content : content
        }

        const requestOptions = {
            method : "PUT",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(postData),
        }

        try {
            const response = await fetch(`${apiUrl}/api/getPostData/writePostData`, requestOptions);

        }catch (e) {
            console.error('오류 :', e.message);
        }
    }
    return(
        <>
            <h1>글 수정 페이지</h1>

                <input
                    type={"text"}
                    name={"title"}
                    value={title}
                    placeholder={"title"}
                    onChange={onChange}
                    className={styles.input}
                />

                <input
                    type={"text"}
                    name={"content"}
                    placeholder={"content"}
                    value={content}
                    onChange={onChange}
                    className={styles.input}
                />
                <button onClick={onSubmit}>글쓰기</button>

        </>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    let  data = null;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    async function fetchData(){
        const requestOptions = {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json',
            },
        }
        const response = await fetch(`${apiUrl}/api/getPostData/getData?id=${id}`, requestOptions);
        data = await response.json();
        data._id = id;
    }

    await fetchData();

    return{props : {data}};
}
