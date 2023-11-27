import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log("Middle ware hit !!");

    return NextResponse.next();
}


export const config = {
    matcher: '/'
  }