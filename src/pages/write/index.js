import {useState} from "react";

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
            <form action={"/api/writePostData"} method={"GET"}>
                <button type={"submit"}>데이터 출력 버튼</button>
            </form>

            <form action={"/api/nowTime"} method={"GET"}>
                <button type={"submit"}>시간 출력 버튼</button>
            </form>

            <form action={"/api/writePostData"} method={"POST"}>

                <input
                    type={"text"}
                    name={"title"}
                    value={title}
                    placeholder={"title"}
                    onChange={(e) => onChange}
                />

                <input
                    type={"text"}
                    name={"content"}
                    placeholder={"content"}
                    value={content}
                    onChange={(e) => onChange}
                />
                <button type={"submit"} onSubmit={onSubmit}>글쓰기</button>
            </form>


        </>
    );
}
