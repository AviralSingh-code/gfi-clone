import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
const secret = process.env.SECRET;

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
    // const { cookies } = req;

    // // const jwt = cookies.token;

    // const jwt = req.cookies.get("token").value;

    // console.log(jwt);

    // if(jwt === undefined)
    // {
    //   return NextResponse.redirect("http://localhost:3000/");
    // }
    // else
    // {
    //   try{
    //     //@ts-ignore
    //     verify(jwt, secret);
    //     console.log("Reached !!")
    //     return NextResponse.next();
    //   } catch(e)
    //   {
    //     console.log("Second Hit FIdsfnal");
    //     return NextResponse.redirect("http://localhost:3000/");
    //   }
    // }

    // return NextResponse.next();
}


// export const config = {
//     matcher: ['/issues', '/addproject']
//   }