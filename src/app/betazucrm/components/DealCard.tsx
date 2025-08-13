export default function DealCard({ deal }: { deal: any }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h4 className="font-semibold">{deal.title}</h4>
      <p className="text-sm text-gray-500">{deal.stage} • {deal.value}</p>
    </div>
  );
}
