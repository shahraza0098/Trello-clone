// 'use client';

// import { useState } from 'react';

// export default function TaskForm({ projectId }) {
//   const [form, setForm] = useState({
//     name: '',
//     description: '',
//     status: 'Backlog',
//     tags: '',
//     dueDate: '',
//     assignedTo: '',
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     const payload = {
//       ...form,
//       tags: form.tags.split(',').map((tag) => tag.trim()),
//       projectId,
//     };

//     const res = await fetch('/api/tasks', {
//       method: 'POST',
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       setMessage('Failed to create task');
//       return;
//     }

//     setMessage('Task added!');
//     setForm({
//       name: '',
//       description: '',
//       status: 'Backlog',
//       tags: '',
//       dueDate: '',
//       assignedTo: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-lg my-6">
//       <input
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         placeholder="Task name"
//         className="w-full border p-2 rounded"
//       />
//       <textarea
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Task description"
//         className="w-full border p-2 rounded"
//       />
//       <select
//         name="status"
//         value={form.status}
//         onChange={handleChange}
//         className="w-full border p-2 rounded"
//       >
//         <option>Backlog</option>
//         <option>In Discussion</option>
//         <option>In Progress</option>
//         <option>Done</option>
//       </select>
//       <input
//         name="tags"
//         value={form.tags}
//         onChange={handleChange}
//         placeholder="Tags (comma separated)"
//         className="w-full border p-2 rounded"
//       />
//       <input
//         name="dueDate"
//         type="date"
//         value={form.dueDate}
//         onChange={handleChange}
//         className="w-full border p-2 rounded"
//       />
//       <input
//         name="assignedTo"
//         value={form.assignedTo}
//         onChange={handleChange}
//         placeholder="Assigned to (email)"
//         className="w-full border p-2 rounded"
//       />
//       {message && <p className="text-green-500">{message}</p>}
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Add Task
//       </button>
//     </form>
//   );
// }


//new code using axios:


'use client';

import { useState } from 'react';
import axios from 'axios';

export default function TaskForm({ projectId }) {
  const [form, setForm] = useState({
    name: '',
    description: '',
    status: 'Backlog',
    tags: '',
    dueDate: '',
    assignedTo: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const payload = {
      ...form,
      tags: form.tags.split(',').map((tag) => tag.trim()),
      projectId,
    };

    try {
      const res = await axios.post('/api/tasks', payload);
      if (res.status === 201) {
        setMessage('Task added!');
        setForm({
          name: '',
          description: '',
          status: 'Backlog',
          tags: '',
          dueDate: '',
          assignedTo: '',
        });
      }
    } catch (err) {
      console.error('Error creating task:', err);
      setMessage('Failed to create task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg my-6">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Task name"
        className="w-full border p-2 rounded"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Task description"
        className="w-full border p-2 rounded"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option>Backlog</option>
        <option>In Discussion</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <input
        name="tags"
        value={form.tags}
        onChange={handleChange}
        placeholder="Tags (comma separated)"
        className="w-full border p-2 rounded"
      />
      <input
        name="dueDate"
        type="date"
        value={form.dueDate}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="assignedTo"
        value={form.assignedTo}
        onChange={handleChange}
        placeholder="Assigned to (email)"
        className="w-full border p-2 rounded"
      />
      {message && <p className="text-green-500">{message}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
}

