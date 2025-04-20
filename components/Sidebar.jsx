'use client'

import Link from 'next/link'
import { Home, Wallet, List, ChevronLeft, ChevronRight } from 'lucide-react'
import { useSidebar } from './SidebarContext'

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Assets', href: '/assets', icon: Wallet },
  { name: 'Transactions', href: '/transactions', icon: List },
]

export default function Sidebar() {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <aside
      className={`fixed top-0 left-0 z-40 flex h-screen flex-col justify-between border-r border-gray-200 bg-white px-2 transition-all duration-200 dark:border-gray-800 dark:bg-gray-900 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        {/* Brand and Collapse Button */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
          >
            {collapsed ? 'C' : 'Coindeck'}
          </Link>

          <button
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            onClick={() => setCollapsed(c => !c)}
            className="ml-2 cursor-pointer rounded p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <Link
                  href={href}
                  title={collapsed ? name : undefined}
                  className="group flex items-center gap-3 rounded-md px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <Icon className="h-6 w-6 shrink-0" />
                  <span
                    className={`whitespace-nowrap transition-all duration-200 ${
                      collapsed
                        ? 'w-0 overflow-hidden opacity-0'
                        : 'ml-2 opacity-100'
                    }`}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  )
}
