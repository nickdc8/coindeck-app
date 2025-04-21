'use client'
import { useEffect } from 'react'
import { usePageTitle } from '@components/PageTitleContext'
import PriceChart from '@components/PriceChart'

export default function Home() {
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Home')
  }, [])

  return (
    <div className="min-h-screen space-y-6 p-6">
      <PriceChart />
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
              <span className="text-lg font-medium">Crypto</span>
              <span className="text-sm text-green-500">77% · 2.02% APY</span>
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            £10,678.68
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Cash and Digital Cash
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            £7.80
          </div>
        </div>
      </div>
    </div>
  )
}
