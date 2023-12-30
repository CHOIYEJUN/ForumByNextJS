export default async function handler(req, res) {
    const nowTime = new Date();

    const year = nowTime.getFullYear();
    const month = nowTime.getMonth();
    const day = nowTime.getDay();
    const houre = nowTime.getHours();
    const min = nowTime.getMinutes();

    try {
        if(req.method === "GET"){
            const timeData = `${year} 년 ${month} 월 ${day} 일 / 시간 : ${houre} : ${min}`;
            res.status(200).json({time : timeData});
        }


    }catch (error){
        res.status(500).json({ error: 'Unable to fetch data' });
    }
}
