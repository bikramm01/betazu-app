import LeadCard from './LeadCard';

const mockLeads = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'New', company: 'Acme Inc' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Contacted', company: 'Beta LLC' },
  { id: 3, name: 'Mike Ross', email: 'mike@example.com', status: 'Qualified', company: 'Gamma Co' },
];

export default function LeadsList() {
  return (
    <div className="space-y-3">
      {mockLeads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
