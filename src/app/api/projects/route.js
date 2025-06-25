import { currentUser } from '@clerk/nextjs/server'
import { connect } from "@/dbConfig/dbConfig";
import Project from "@/models/Project";

export async function POST(req) {
  await connect();

    
    const user = await currentUser();
    const userId=user.id;
    //console.log(user.id);
    const { name, description } = await req.json();

    if (!userId) return new Response("Unauthorized", { status: 401 });
    if (!name) return new Response("Project name is required", { status: 400 });

   // await connect();
   try{
    const project = await Project.create({ userId, name, description });

    return Response.json(project, { status: 201 });
  } catch (err) {
    return new Response("Error creating project", { status: 500 });
  }
}
