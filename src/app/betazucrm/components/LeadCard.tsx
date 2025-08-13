import StatusBadge from './StatusBadge';

export default function LeadCard({ lead }: { lead: any }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <h4 className="font-semibold">{lead.name}</h4>
        <p className="text-sm text-gray-500">{lead.email} • {lead.company}</p>
      </div>
      <StatusBadge status={lead.status} />
    </div>
  );
}
