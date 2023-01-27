// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';
import path from 'path';
// import LoginForm from '@/components/forms/login';
function handler(req, res) {
  if(req.method === 'POST'){
    const email =req.body.email;
    const password = req.body.password;

    const newFeedback = {
     id: new Date().toISOString(),
     email: email,
     password: password,
   };

    ///store that in a database or in a file

   const filePath =  path.join(process.cwd(), 'data', 'feedback.json');
   const fileData =  fs.readFileSync(filePath);
   const data = JSON.parse(fileData);
   data.push(newFeedback);
   fs.writeFileSync(filePath, JSON.stringify(data));
   res.status(201).json({message: 'Success'});
  }else{
 res.status(200).json({ message: 'This works' });
  }
 
}


export default handler;
