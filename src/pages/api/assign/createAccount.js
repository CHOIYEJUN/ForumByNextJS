import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {MongoClient, ObjectId} from "mongodb";

export default async function handler(req, res){

    const url = process.env.NEXT_PUBLIC_MongoDB_URL;
    const client = new MongoClient(url);

    try{
        await client.connect();
        const db = client.db('forum');

        if(req.method === "GET") {

            const posts = await db
                .collection('user')
                .findOne({
                    id : req.query.id
                });
            if(posts){
                res.status(200).json({ok : false});
            }
            if(!posts) {
                res.status(200).json({ok : true});
            }

        }

        if(req.method === "POST"){

            const login = await db
                .collection('user')
                .insertOne({
                    id: req.body.id,
                    password : req.body.password
                })

            res.status(200).json({ ok : true});

        }

    }catch (error) {
        res.status(500).json({error : "Unable to fetch data "})
    }

}
