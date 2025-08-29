"use client";

import { useState } from "react";
import { Search, Bell, User } from "lucide-react";
import Hambuger from "./hambuger";

export default function Header({ onToggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="ml-16 max-sm:ml-0 backdrop-blur-3xl border-b border-[#1C1D20] px-4 py-3 sm:px-6 sm:py-4 z-50 flex items-center justify-between">
      {/* LEFT SIDE (Hamburger + Brand maybe later) */}
      <div className="flex items-center space-x-3">
        <span onClick={onToggleSidebar} className="p-2">
          <Hambuger />
        </span>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="flex items-center space-x-3">
        {/* Mobile Search Toggle */}
        <div className="sm:hidden">
          {!showSearch ? (
            <button
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setShowSearch(true)}
            >
              <Search className="h-5 w-5" />
            </button>
          ) : (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                className="border border-[#1C1D20] rounded-[30px] pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-48"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Desktop Search (always visible) */}
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="border border-[#1C1D20] rounded-[30px] pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
          />
        </div>

        {/* Notification Icon */}
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Settings Icon */}
        <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors hidden sm:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="size-6"
          >
            <path
              fill="currentColor"
              d="M15 2H9C7.34 2 6 3.34 6 5v14c0 1.66 1.34 3 3 3h6c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3Z"
              opacity="0.4"
            />
            <path
              fill="currentColor"
              d="M18.67 5.33h-.34c-.12 0-.23 0-.35.01.01.05.02.1.02.16v13c0 .06-.01.11-.02.16.11.01.22.01.35.01h.34c2.66 0 3.33-.67 3.33-3.34V8.67c0-2.67-.67-3.34-3.33-3.34ZM6 18.5v-13c0-.06.01-.11.02-.16-.12-.01-.23-.01-.35-.01h-.34C2.67 5.33 2 6 2 8.67v6.66c0 2.67.67 3.34 3.33 3.34h.34c.12 0 .23 0 .35-.01A.777.777 0 0 1 6 18.5Z"
            />
          </svg>
        </button>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  );
}
