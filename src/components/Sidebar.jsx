import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  return (
    <aside className="bg-secondary text-secondary-foreground w-64 p-4 space-y-4">
      <Link to="/dashboard" className="block hover:underline">Dashboard</Link>
      <Link to="/users" className="block hover:underline">Users</Link>
      <Link to="/posts" className="block hover:underline">Posts</Link>
      <Link to="/settings" className="block hover:underline">Settings</Link>
    </aside>
  );
};

export default Sidebar;