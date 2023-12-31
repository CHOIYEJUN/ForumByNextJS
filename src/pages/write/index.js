import {useState} from "react";
import styles from "./write.module.css"
export default function Write() {

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const onChange = (e) => {

        if(e.name === "title"){
            setTitle(e.value);
        }
        if(e.name === "content"){
            setContent(e.value);
        }
    }

    const onSubmit = () => {
        if(!title) {
            alert("title은 필수값 입니다.")
            return false
        }
        if(!content) {
            alert("content 필수값 입니다.")
            return false
        }
    }


    return (
        <>
            <h1>글 작성 페이지</h1>


           {/* Delete, Put 사용 안됨..*/}


            <form action={"/api/getPostData/writePostData"} method={"POST"}>

                <input
                    type={"text"}
                    name={"title"}
                    value={title}
                    placeholder={"title"}
                    onChange={(e) => onChange}
                    className={styles.input}
                />

                <input
                    type={"text"}
                    name={"content"}
                    placeholder={"content"}
                    value={content}
                    onChange={(e) => onChange}
                    className={styles.input}
                />
                <button type={"submit"} onSubmit={onSubmit}>글쓰기</button>
            </form>


        </>
    );
}
