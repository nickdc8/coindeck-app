'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { LogOut, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { usePageTitle } from './PageTitleContext'

function ThemeDropdownItem() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'
  return (
    <DropdownMenu.Item
      className="flex cursor-pointer items-center gap-2 rounded px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none dark:text-gray-100 dark:hover:bg-gray-700"
      onSelect={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{isDark ? 'Light mode' : 'Dark mode'}</span>
    </DropdownMenu.Item>
  )
}

export default function Header() {
  const { title } = usePageTitle()

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 backdrop-blur dark:border-gray-700 dark:bg-gray-900 dark:backdrop-blur">
      <div className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </div>

      <div className="flex flex-1 items-center justify-end space-x-4">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="max-w-xs rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
          />
        </div>

        <div>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <div className="relative flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-300 outline-none focus:ring-0 dark:bg-gray-600">
                <span className="font-bold text-gray-600 dark:text-gray-200">
                  NC
                </span>
              </div>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content
              sideOffset={8}
              className="absolute -right-5 z-50 min-w-[140px] rounded-md border border-gray-200 bg-white p-1 shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <ThemeDropdownItem />
              <DropdownMenu.Item
                className="flex cursor-pointer items-center gap-2 rounded px-4 py-2 text-sm text-red-600 hover:bg-red-50 focus:outline-none dark:hover:bg-red-900"
                onSelect={() => {
                  alert('Log out clicked')
                }}
              >
                <LogOut className="h-4 w-4 text-red-600" />
                <span>Log out</span>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  )
}
