import React from 'react';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Betazu CRM',
  description: 'Manage your leads, contacts, and deals in one place.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 text-slate-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 max-w-7xl mx-auto w-full p-6">{children}</main>
      </div>
    </div>
  );
}
