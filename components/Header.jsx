import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-6 bg-gray-00 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-end flex-1 space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="max-w-xs px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
          {/* Placeholder avatar, replace with user image if available */}
          <span className="text-gray-600 dark:text-gray-200 font-bold">NC</span>
        </div>
      </div>
    </header>
  );
}
