'use client'

import { useSidebar } from './SidebarContext'
import Header from './Header'
import Sidebar from './Sidebar'
import { ThemeProvider } from 'next-themes'
import { PageTitleProvider } from './PageTitleContext'

export default function ClientLayout({ children }) {
  const { collapsed } = useSidebar()

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PageTitleProvider>
        <Sidebar />
        <main
          className={`transition-all duration-200 ${collapsed ? 'ml-20' : 'ml-64'}`}
        >
          <Header />
          <div className="flex flex-col gap-6 px-6 lg:flex-row dark:bg-gray-900">
            {/* Main content area (children) */}
            <div className="flex-1">{children}</div>

            {/* Right-hand panel */}
            <aside className="w-full shrink-0 border-l border-gray-200 px-2 pt-6 lg:w-[320px] xl:w-[400px] dark:border-gray-700">
              {/* Replace this with a real component later */}
              <div className="mt-4">
                <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Trade Panel
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This is where you'd place the Buy/Sell UI for crypto.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </PageTitleProvider>
    </ThemeProvider>
  )
}
