import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {MongoClient} from "mongodb";

export default async function handler(req, res) {
    const url = process.env.NEXT_PUBLIC_MongoDB_URL;
    const client = new MongoClient(url);

    try {

        if(req.method === "GET"){
            await client.connect();
            const db = client.db('forum');
            const posts = await db
                .collection('post')
                .find()
                .toArray();
            res.status(200).json(posts);
        }else if(req.method === "POST"){
            await client.connect();
            const {title, content} = req.body
            const db = client.db('forum');
            const post = await db
                .collection('post')
                .insertOne({
                    title : title,
                    content : content
                });

            res.redirect("/write", 200)
        }

    }catch (error) {
        res.status(500).json({error: 'Unable to fetch data'});
    }finally {
        await client.close();
    }
}
