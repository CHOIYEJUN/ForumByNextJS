import {useState} from "react";
import styles from "@/pages/assign/login.module.css";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function CreateAccount () {

    const [idValue, setIdValue] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [isPasswordCheck , setIsPasswordCheck] = useState(false);
    const [idCheck, setIdCheck] = useState(false)


    const onchange = (e) => {
        if(e.target.name === "id"){
            setIdValue(e.target.value);
        }
        if(e.target.name === "password") {
            setPassword(e.target.value);
        }
        if(e.target.name === "passwordCheck"){
            setPasswordCheck(e.target.value);

            if(password !== e.target.value) {
                setIsPasswordCheck(false);
            }
            if (password === e.target.value) {
                setIsPasswordCheck(true);
            }
        }

    }

    const onClick = async () => {

        if(!idCheck) {
            alert("ID 중복체크를 해주세요");
            return false;
        }

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const userData ={
            id : idValue,
            password : password
        }

        const requestOptions = {
            method : "POST",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(userData),
        }
        try {
                const response = await fetch(`${apiUrl}/api/assign/createAccount`, requestOptions);
                const data = await response.json();

                if(data.ok) {
                    // 회원가입 성공 처리
                    console.log('회원가입 성공', data);
                } else {
                    // 오류 처리
                    console.log('회원가입 실패', data);
                }

        } catch (e) {
            console.error('회원가입 요청 중 오류 발생:', e.message);
        }

    }

    const onIdCheckClick = async () => {

        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        const userData ={
            id : idValue,
        }

        const requestOptions = {
            method : "GET",
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(userData),
        }


        try {
            const response = await fetch(`${apiUrl}/api/assign/createAccount?id=${requestOptions}`);
            const data = await response.json();

            if(!data.ok) {
                // ID가 이미 존재하는 경우 처리
                alert("아이디가 이미 존재합니다.")
                setIdCheck(false);
            } else {
                // 사용 가능한 ID
                console.log('사용 가능한 ID입니다.');
                setIdCheck(true);
            }
        } catch (error) {
            console.error('ID 중복 체크 중 오류 발생:', error);
        }


    }

    return(
        <div
            className={styles.loginWarp}
        >
            <h1>
                회원가입
            </h1>

            <div
                className={styles.inputWarp}
            >
                <input
                    type={"text"}
                    placeholder={"ID 를 입력하세요"}
                    value={idValue}
                    name={"id"}
                    className={styles.input}
                    onChange={onchange}
                />
                <button
                    onClick={onIdCheckClick}
                >
                    ID 중복체크
                </button>
                <input
                    type={"password"}
                    placeholder={"PassWord 를 입력하세요"}
                    value={password}
                    name={"password"}
                    className={styles.input}
                    onChange={onchange}
                />
                <input
                    type={"password"}
                    placeholder={"PassWord 확인"}
                    value={passwordCheck}
                    name={"passwordCheck"}
                    className={styles.input}
                    onChange={onchange}
                />

                <p>
                    {isPasswordCheck ?
                        "" : "비밀번호를 확인해주세요"
                    }
                </p>

                <button
                    className={styles.button}
                    onClick={onClick}
                >
                    회원가입 하기
                </button>

            </div>

        </div>
    )
}
