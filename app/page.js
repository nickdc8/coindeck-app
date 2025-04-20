export default function Home() {
  return (
    <div className="min-h-screen space-y-6 p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        Dashboard
      </h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            Total Balance
          </h2>
          <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
            $12,450.00
          </p>
        </div>

        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">Assets</h2>
          <p className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
            5
          </p>
        </div>

        <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
          <h2 className="text-sm text-gray-500 dark:text-gray-400">
            Portfolio Change
          </h2>
          <p className="mt-2 text-xl font-bold text-green-500">+4.2%</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
          Recent Transactions
        </h2>
        <table className="w-full text-left text-sm text-gray-700 dark:text-gray-300">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-2">Date</th>
              <th className="py-2">Asset</th>
              <th className="py-2">Type</th>
              <th className="py-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-2">2025-04-19</td>
              <td className="py-2">Bitcoin</td>
              <td className="py-2">Buy</td>
              <td className="py-2 text-right">$2,000.00</td>
            </tr>
            <tr className="border-b border-gray-100 dark:border-gray-700">
              <td className="py-2">2025-04-18</td>
              <td className="py-2">Ethereum</td>
              <td className="py-2">Sell</td>
              <td className="py-2 text-right">$1,250.00</td>
            </tr>
            <tr>
              <td className="py-2">2025-04-17</td>
              <td className="py-2">Cardano</td>
              <td className="py-2">Buy</td>
              <td className="py-2 text-right">$300.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
