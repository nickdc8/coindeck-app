'use client'

import { useEffect } from 'react'
import { usePageTitle } from '@components/PageTitleContext'

export default function Page() {
  const { setTitle } = usePageTitle()

  useEffect(() => {
    setTitle('Assets')
  }, [])

  return (
    <div className="min-h-screen space-y-6 p-6">
      {/* Page-specific content */}
    </div>
  )
}
