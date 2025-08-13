import React from 'react'
import './styles/crm.css'

export default function BetazuCrmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="crm-root min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {children}
      </div>
    </div>
  )
}
