'use client';
import React from 'react';
import { Users, Briefcase, Settings, BarChart } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-bold text-blue-600">Betazu CRM</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link href="#" className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600">
          <Users size={18} /> Leads
        </Link>
        <Link href="#" className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600">
          <Briefcase size={18} /> Deals
        </Link>
        <Link href="#" className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600">
          <BarChart size={18} /> Reports
        </Link>
        <Link href="#" className="flex items-center gap-3 p-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600">
          <Settings size={18} /> Settings
        </Link>
      </nav>

      <div className="p-4 border-t text-xs text-slate-400">
        © {new Date().getFullYear()} Betazu Inc.
      </div>
    </aside>
  );
}
