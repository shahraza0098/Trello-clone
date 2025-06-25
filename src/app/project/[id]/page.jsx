import { connect } from '@/dbConfig/dbConfig';
import Task from '@/models/Task';
import Project from '@/models/Project';
import TaskForm from '@/components/TaskForm';

export default async function ProjectDetail({ params }) {
  const { id } = await params;
 //const id= await params.id
  // console.log(id);
  // console.log("hey this is ID of the project", params.id);
  
  

  await connect();
  const project = await Project.findById(id).lean();
  const tasks = await Task.find({ projectId: id }).lean();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
      <p className="mb-4 text-gray-600">{project.description}</p>

      <TaskForm projectId={id} />

      <h2 className="text-xl font-semibold mt-8 mb-4">Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div key={task._id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{task.name}</h3>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">Status: {task.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
