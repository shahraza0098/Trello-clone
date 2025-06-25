
import {  currentUser } from "@clerk/nextjs/server"
import { connect } from "@/dbConfig/dbConfig";
import Project from "@/models/Project";

export async function GET() {
  try {
    //console.log(currentUser());
    
    
    const user = await currentUser();
    const userId=user.id;
    //console.log(user.id);
    if (!userId) return new Response("Unauthorized", { status: 401 });

    await connect();
    const projects = await Project.find({ userId }).sort({ createdAt: -1 });

    return Response.json(projects, { status: 200 });
  } catch (err) {
    return new Response("Error fetching projects", { status: 500 });
  }
}
