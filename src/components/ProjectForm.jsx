// 'use client';

// import { useState } from 'react';

// export default function ProjectForm() {
//   const [form, setForm] = useState({ name: '', description: '' });
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!form.name) {
//       setError('Project name is required');
//       return;
//     }

//     const res = await fetch('/api/projects', {
//       method: 'POST',
//       body: JSON.stringify(form),
//       headers: {
//         "Content-Type": "application/json",
//        },
//       credentials: "include",
//     });

//     if (!res.ok) {
//       setError('Failed to create project');
//       return;
//     }

//     setSuccess('Project created!');
//     setForm({ name: '', description: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mb-6">
//       <input
//         type="text"
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         placeholder="Project Name"
//         className="w-full p-2 border rounded"
//       />
//       <textarea
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Project Description"
//         className="w-full p-2 border rounded"
//       />
//       {error && <p className="text-red-500">{error}</p>}
//       {success && <p className="text-green-600">{success}</p>}
//       <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//         Create Project
//       </button>
//     </form>
//   );
// }


//new code 
'use client'
import axios from 'axios';
import { useState } from 'react';
//import { useUser } from "@clerk/nextjs";

export default function ProjectForm() {
 const [form, setForm] = useState({ name: '', description: '' });
 const [error, setError] = useState('');
 const [success, setSuccess] = useState('');

 const handleChange = (e) =>
 setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
 e.preventDefault();
 setError('');
 setSuccess('');

 if (!form.name) {
 setError('Project name is required');
 return;
 }

    try {
      const res = await axios.post('/api/projects', form, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccess('Project created!');
      setForm({ name: '', description: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to create project');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mb-6">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Project Name"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Project Description"
        className="w-full p-2 border rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Project
      </button>
    </form>
  );
}

