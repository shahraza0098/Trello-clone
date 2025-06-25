
import { auth, currentUser } from '@clerk/nextjs/server'

import { connect } from "@/dbConfig/dbConfig";
import Task from "@/models/Task";

export async function POST(req) {
  try {
    const user = await currentUser();
    const userId=user.id;
    const body = await req.json();

    const { projectId, name, description, status, tags, dueDate, assignedTo } = body;

    if (!userId) return new Response("Unauthorized", { status: 401 });
    if (!projectId || !name || !status) {
      return new Response("Missing required fields", { status: 400 });
    }

    await connect();

    const task = await Task.create({
      userId,
      projectId,
      name,
      description,
      status,
      tags,
      dueDate,
      assignedTo,
    });

    return Response.json(task, { status: 201 });
  } catch (err) {
    console.error("Error creating task:", err);
    return new Response("Server error", { status: 500 });
  }
}
