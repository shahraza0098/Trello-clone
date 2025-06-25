


import { connect } from '@/dbConfig/dbConfig';
import Task from '@/models/Task';
import { auth, currentUser } from '@clerk/nextjs/server'

export async function PATCH(req) {
  try {
    const user = await currentUser();
    const userId=user.id;
    const { id, status } = await req.json();

    if (!userId) return new Response('Unauthorized', { status: 401 });

    const allowedStatuses = ['Backlog', 'In Discussion', 'In Progress', 'Done'];
    if (!allowedStatuses.includes(status)) {
      return new Response('Invalid status', { status: 400 });
    }

    await connect();

    const task = await Task.findById(id);
    if (!task || task.userId !== userId) {
      return new Response('Not found or not allowed', { status: 404 });
    }

    task.status = status;
    await task.save();

    return Response.json(task, { status: 200 });
  } catch (err) {
    console.error('Update error:', err);
    return new Response('Failed to update status', { status: 500 });
  }
}


