import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {MongoClient, ObjectId} from "mongodb";

export default async function handler(req, res) {

    const url = process.env.NEXT_PUBLIC_MongoDB_URL;
    const client = new MongoClient(url);

    try {

        if(req.method === "GET"){
            await client.connect();
            const db = client.db('forum');
            const posts = await db
                .collection('post')
                .findOne({
                        _id : new ObjectId(req.query.id),
                    }
                )
            res.status(200).json(posts);
        }

    }catch (error) {
        res.status(500).json({error: 'Unable to fetch data'});
    }finally {
        await client.close();
    }

}
