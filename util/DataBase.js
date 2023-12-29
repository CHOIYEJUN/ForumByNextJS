import {MongoClient} from "mongodb";

const url = "mongodb+srv://dpwns108:choiheon97@nextjs.z75zqce.mongodb.net/?retryWrites=true&w=majority"
const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
});


export {client}
