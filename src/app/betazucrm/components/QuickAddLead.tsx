export default function QuickAddLead() {
  return (
    <form className="space-y-3">
      <input
        type="text"
        placeholder="Lead Name"
        className="w-full border p-2 rounded"
      />
      <input
        type="email"
        placeholder="Lead Email"
        className="w-full border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Lead
      </button>
    </form>
  );
}
