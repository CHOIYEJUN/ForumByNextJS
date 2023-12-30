// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  if(req.method === 'POST') {
    console.log("post");
  } else if(req.method === 'GET') {
    console.log("get");
  }
  res.status(200).json({ name: 'John Doe' })
}
