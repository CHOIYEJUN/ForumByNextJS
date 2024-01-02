
import {useEffect, useState} from "react";
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import ListItem from "@/pages/list/ListItem";

export default  function List() {

    const [posts, setPosts] = useState([]);


    return (
        <div className="list-bg">
            <ListItem />
        </div>
    )
}
