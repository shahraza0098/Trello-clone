import { connect } from '@/dbConfig/dbConfig';
import { auth, currentUser } from '@clerk/nextjs/server'


export async function GET() {
    // const { userId } = auth();
const user = await currentUser();
const userId=user.id
console.log("this is the original ID ",userId);

//console.log(userId);
  try {
    await connect();
console.log("connected DB success");

    return new Response('✅ DB connected successfully', { status: 200 });



  } catch (err) {
    return new Response('❌ Failed to connect to DB', { status: 500 });
  }
}
