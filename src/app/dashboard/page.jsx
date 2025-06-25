'use client';

import { useState } from 'react';
import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';
import TaskBoard from '@/components/TaskBoard';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="space-x-2">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 rounded ${
              activeTab === 'projects' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('taskboard')}
            className={`px-4 py-2 rounded ${
              activeTab === 'taskboard' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Task Board
          </button>
        </div>
      </div>

      {activeTab === 'projects' ? (
        <>
          <ProjectForm />
          <ProjectList />
        </>
      ) : (
        <TaskBoard />
      )}
    </div>
  );
}
