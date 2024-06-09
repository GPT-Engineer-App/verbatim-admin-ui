import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-lg font-bold">Verbatim Admin</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/users" className="hover:underline">Users</Link>
        <Link to="/posts" className="hover:underline">Posts</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </div>
      <Button variant="ghost">Logout</Button>
    </nav>
  );
};

export default Navbar;