// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import pullfluenceConfig from "./pullfluence.json" 
import axios from 'axios';

type Data = object;




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  axios.post('https://us-central1-pullfluence-ac815.cloudfunctions.net/posts', {
    siteId:"FHwxQCv8u6ipRAOJjFTM"
  })
  .then(function (response) {
    console.log(response.data);
    
    res.status(200).json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
  
}
