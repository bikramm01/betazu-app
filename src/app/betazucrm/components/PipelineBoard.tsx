import DealCard from './DealCard';

const mockDeals = [
  { id: 1, title: 'Website Redesign', value: '$5,000', stage: 'Proposal Sent' },
  { id: 2, title: 'SEO Campaign', value: '$2,500', stage: 'Negotiation' },
];

export default function PipelineBoard() {
  return (
    <div className="space-y-3">
      {mockDeals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}
