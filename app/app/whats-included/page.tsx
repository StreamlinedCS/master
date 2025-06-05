export default function WhatsIncludedPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">What’s Included</h1>

      <p className="text-lg mb-6 text-center">
        Here's a breakdown of what's included in each of our cleaning services.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left">Add-On</th>
              <th className="px-4 py-3 text-center">Standard Clean</th>
              <th className="px-4 py-3 text-center">Deep Clean</th>
              <th className="px-4 py-3 text-center">Move-In/Out</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Baseboard Cleaning", "❌ $25", "✅ Included", "✅ Included"],
              ["Fridge Interior", "❌ $25", "✅ Included", "✅ Included"],
              ["Oven Interior", "❌ $25", "✅ Included", "✅ Included"],
              ["Interior Windows", "❌ $20", "❌ $20", "✅ Included"],
              ["Pet Cleaning (hair/odor)", "❌ $35", "❌ $35", "✅ Included"],
            ].map(([addon, standard, deep, moveOut], i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-3 font-medium">{addon}</td>
                <td className="px-4 py-3 text-center">{standard}</td>
                <td className="px-4 py-3 text-center">{deep}</td>
                <td className="px-4 py-3 text-center">{moveOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 text-center">
        <a href="/services" className="text-blue-600 underline">
          ← Back to Services
        </a>
      </div>
    </main>
  );
}
