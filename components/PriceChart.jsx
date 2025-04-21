'use client'

import { useState } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

// Dummy data for each time range
const dummyData = {
  ALL: [
    { time: 'Jan', price: 1000 },
    { time: 'Feb', price: 1200 },
    { time: 'Mar', price: 1500 },
    { time: 'Apr', price: 1300 },
    { time: 'May', price: 1800 },
    { time: 'Jun', price: 1600 },
    { time: 'Jul', price: 2000 },
    { time: 'Aug', price: 2200 },
    { time: 'Sep', price: 2400 },
    { time: 'Oct', price: 3000 },
    { time: 'Nov', price: 3800 },
    { time: 'Dec', price: 5000 },
  ],
  '1Y': [
    { time: 'Apr', price: 1300 },
    { time: 'May', price: 1500 },
    { time: 'Jun', price: 1400 },
    { time: 'Jul', price: 1800 },
    { time: 'Aug', price: 1700 },
    { time: 'Sep', price: 2100 },
    { time: 'Oct', price: 2300 },
    { time: 'Nov', price: 2500 },
    { time: 'Dec', price: 2900 },
    { time: 'Jan', price: 3600 },
    { time: 'Feb', price: 4000 },
    { time: 'Mar', price: 4600 },
    { time: 'Apr', price: 5000 },
  ],
  '1M': [
    { time: 'Week 1', price: 4000 },
    { time: 'Week 2', price: 4200 },
    { time: 'Week 3', price: 4500 },
    { time: 'Week 4', price: 4400 },
    { time: 'Today', price: 5000 },
  ],
  '1W': [
    { time: 'Mon', price: 4300 },
    { time: 'Tue', price: 4400 },
    { time: 'Wed', price: 4550 },
    { time: 'Thu', price: 4700 },
    { time: 'Fri', price: 4650 },
    { time: 'Sat', price: 4900 },
    { time: 'Sun', price: 5000 },
  ],
  '1D': [
    { time: '08:00', price: 4700 },
    { time: '10:00', price: 4750 },
    { time: '12:00', price: 4800 },
    { time: '14:00', price: 4780 },
    { time: '16:00', price: 4900 },
    { time: '18:00', price: 4950 },
    { time: '20:00', price: 5000 },
  ],
  '1H': [
    { time: '00:00', price: 4950 },
    { time: '00:10', price: 4960 },
    { time: '00:20', price: 4970 },
    { time: '00:30', price: 4980 },
    { time: '00:40', price: 4975 },
    { time: '00:50', price: 4990 },
    { time: '01:00', price: 5000 },
  ],
}

const timeOptions = ['1H', '1D', '1W', '1M', '1Y', 'ALL']

export default function PriceChart() {
  const [range, setRange] = useState('ALL')
  const data = dummyData[range] || dummyData['ALL']

  return (
    <div className="rounded-lg bg-white p-6 shadow dark:bg-gray-900">
      <div className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        £10,686.48
      </div>
      <div className="mb-4 text-sm text-green-600 dark:text-green-400">
        ↑ £7,991.11 (296.26%){' '}
        <span className="text-gray-500 dark:text-gray-400">All</span>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="time"
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis domain={['auto', 'auto']} hide />
            <Tooltip
              contentStyle={{ backgroundColor: '#111827', border: 'none' }}
              labelStyle={{ color: '#9CA3AF' }}
              itemStyle={{ color: '#fff' }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2563eb"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Time Range Tabs */}
      <div className="mt-4 flex gap-4 text-sm font-medium text-gray-600 dark:text-gray-400">
        {timeOptions.map(opt => (
          <button
            key={opt}
            onClick={() => setRange(opt)}
            className={`px-2 py-1 transition ${
              range === opt
                ? 'rounded bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-white'
                : ''
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
