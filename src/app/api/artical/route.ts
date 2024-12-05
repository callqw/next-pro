import { NextResponse, type NextRequest } from 'next/server'
 
export async function POST(request: NextRequest) {

  
  const url = request.nextUrl
  console.log('artical33',url);
  return NextResponse.json({msg:"success"})
}