'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const statuses = ['Backlog', 'In Discussion', 'In Progress', 'Done'];

const ItemTypes = {
  TASK: 'task',
};

export default function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  // Load tasks on component mount
  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await axios.get('/api/tasks/board');
        setTasks(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    load();
  }, []);

  // Move task between columns
  const moveTask = async (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);

    try {
      await axios.patch('/api/tasks/update', {
        id: taskId,
        status: newStatus, // Should be string like "Backlog", "Done"
      });
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {statuses.map((status) => (
          <Column
            key={status}
            status={status}
            tasks={tasks.filter((task) => task.status === status)}
            moveTask={moveTask}
          />
        ))}
      </div>
    </DndProvider>
  );
}

function Column({ status, tasks, moveTask }) {
  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => {
      if (item.status !== status) {
        moveTask(item._id, status); // status is string like "Done"
      }
    },
  });

  return (
    <div
      ref={drop}
      className="bg-gray-100 p-4 rounded min-h-[300px]"
    >
      <h2 className="font-bold text-lg mb-3">{status}</h2>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

function TaskCard({ task }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { _id: task._id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`bg-white p-3 rounded shadow cursor-move mb-2 ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <h3 className="font-semibold">{task.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{task.description}</p>

      {/* Due Date */}
      {task.dueDate && (
        <p className="text-xs text-gray-500 mb-1">
          🗓 Due: {new Date(task.dueDate).toLocaleDateString()}
        </p>
      )}

      {/* Tags */}
      {task.tags && Array.isArray(task.tags) && task.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
