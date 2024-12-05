export async function GET() {
    console.log('ininin');

    // const data = await fetch('https://api.vercel.app/blog')
    // const posts = await data.json()

    return Response.json({ msg: "success" })
}