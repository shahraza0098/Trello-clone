'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/api/projects/user');
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  if (projects.length === 0) return <p>No projects found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Link
          key={project._id}
          href={`/project/${project._id}`}
          className="border rounded p-4 hover:shadow"
        >
          <h3 className="font-bold text-lg">{project.name}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </Link>
      ))}
    </div>
  );
}
