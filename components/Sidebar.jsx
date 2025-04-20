'use client'

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Wallet,
  List,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Assets",
    href: "/assets",
    icon: Wallet,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: List,
  },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        flex flex-col justify-between
        h-screen
        bg-gray-100 dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-800
        transition-all duration-200
        ${collapsed ? "w-20" : "w-64"}
        fixed top-0 left-0 z-40
      `}
    >
      <div>
        {/* Brand and Collapse Button */}
        <div className="flex items-center justify-between px-4 py-4">
          <span
            className={`
              text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100
              transition-opacity duration-200
              ${collapsed ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
          >
            Coindeck
          </span>
          <button
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={() => setCollapsed((c) => !c)}
            className="ml-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
        {/* Navigation Links */}
        <nav className="mt-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}>
                <Link
                  href={href}
                  className={`
                    flex items-center gap-3 px-4 py-2 rounded-md
                    text-gray-700 dark:text-gray-200
                    hover:bg-gray-200 dark:hover:bg-gray-800
                    transition-colors
                    ${collapsed ? "justify-center" : ""}
                  `}
                >
                  <Icon className="w-6 h-6" />
                  <span
                    className={`
                      transition-opacity duration-200
                      ${collapsed ? "opacity-0 w-0" : "opacity-100 w-auto ml-2"}
                      whitespace-nowrap
                    `}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Theme Toggle at the bottom */}
      <div className="p-4">
        <div className={collapsed ? "flex justify-center" : ""}>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
