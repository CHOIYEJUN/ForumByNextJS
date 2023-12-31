import {useState} from "react";
import styles  from "./login.module.css"

export  default function Login() {

    const [idValue, setIdValue] = useState(null);
    const [password, setPassword] = useState(null);

    const onChange = (e) => {

        if(e.name === "id"){
            setIdValue(idValue);
        }
        if(e.name === "password") {
            setPassword(password);
        }

    }

    return(
        <div
            className={styles.loginWarp}
        >
            <h1>
                로그인
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
                />
                <input
                    type={"password"}
                    placeholder={"PassWord 를 입력하세요"}
                    value={password}
                    name={"password"}
                    className={styles.input}
                />
            </div>

        </div>
    )

}
