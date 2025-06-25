
import { auth, currentUser } from '@clerk/nextjs/server'
import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/Task";

export async function GET() {
  try {
    const user = await currentUser();
    const userId=user.id;
    if (!userId) return new Response("Unauthorized", { status: 401 });

    await connect();

    const tasks = await Task.find({ userId }).populate("projectId");

    return Response.json(tasks, { status: 200 });
  } catch (err) {
    console.error("Error loading board:", err);
    return new Response("Server error", { status: 500 });
  }
}
