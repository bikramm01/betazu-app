import LeadsList from './components/LeadsList';
import PipelineBoard from './components/PipelineBoard';
import QuickAddLead from './components/QuickAddLead';

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Leads Section */}
      <section className="lg:col-span-2 bg-white shadow-sm rounded-xl p-6 border">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-800">Leads</h2>
            <p className="text-sm text-slate-500">Realtime • PostgreSQL</p>
          </div>
        </div>
        <LeadsList />
      </section>

      {/* Right Sidebar Widgets */}
      <aside className="lg:col-span-1 space-y-6">
        {/* Quick Add */}
        <div className="bg-white shadow-sm rounded-xl p-6 border">
          <h3 className="font-medium text-slate-700 mb-4">Quick Add</h3>
          <QuickAddLead />
        </div>

        {/* Pipeline Board */}
        <div className="bg-white shadow-sm rounded-xl p-6 border">
          <h3 className="font-medium text-slate-700 mb-4">Pipeline</h3>
          <PipelineBoard />
        </div>
      </aside>
    </div>
  );
}
