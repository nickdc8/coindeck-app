'use client'

import { useSidebar } from './SidebarContext'
import Header from './Header'
import Sidebar from './Sidebar'
import { ThemeProvider } from 'next-themes'

export default function ClientLayout({ children }) {
  const { collapsed } = useSidebar()

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Sidebar />
      <main
        className={`transition-all duration-200 ${collapsed ? 'ml-20' : 'ml-64'}`}
      >
        <Header />
        <div className="pt-4 dark:bg-gray-900">{children}</div>
      </main>
    </ThemeProvider>
  )
}
