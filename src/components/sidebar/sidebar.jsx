"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Gift,
  SquareMenu,
  House,
  User,
  LucideSettings,
  MessageSquare,
  Brain,
  ClipboardList,
} from "lucide-react";
import logo from "/assets/smartgatelogo.png";

export default function Sidebar({ collapsed, toggleCollapsed }) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { label: "Dashboard" },
    { label: "AI Review" },
    { label: "Jobs" },
    { label: "Feedback" },
    { label: "Messages" },
  ];

  return (
    <div className="flex h-screen fixed top-0 left-0 z-50">
      {/* Fixed Vertical Icon Bar */}
      <div className="max-sm:hidden w-16 bg-[#0e0f11] flex flex-col items-center justify-between h-full py-4 border-r border-[#1C1D20]">
        <div className="flex flex-col items-center gap-6 mt-6 text-gray-400">
          <div className="text-xl mb-4">SG</div>

          <div className="flex flex-col gap-4">
            <a href="/">
              <div className="cursor-pointer hover:text-white p-4 bg-[#001f5d88] rounded-2xl">
                <House className="w-5 h-5 " />
              </div>
            </a>

            <a href="/jobs">
              <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
                <Gift className="w-5 h-5 " />
              </div>
            </a>

            <a href="/dashboard">
              <div className="cursor-pointer hover:text-white p-4 rounded-2xl">
                <SquareMenu className="w-5 h-5 " />
              </div>
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex flex-col gap-8 items-center justify-center ">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>

          <div className="cursor-pointer text-gray-400 hover:text-white p-4 rounded-2xl">
            <LucideSettings />
          </div>
        </div>
        <div />
      </div>

      {/* Expandable Sidebar */}
      <div
        className={`bg-[#0e0f11] border-r border-[#1C1D20] transition-all duration-300 flex flex-col ${
          collapsed ? "w-0" : "w-64"
        } overflow-hidden`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-[#1C1D20]">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white">
              <img src={logo} alt="Logo" />
            </span>
          </div>
          <button
            onClick={toggleCollapsed}
            className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-3">
            {menuItems.map((item, index) => {
              const isActive = item.label === activeItem;
              return ( 
                <a
                  href={item.label}
                  key={index}
                  onClick={() => setActiveItem(item.label)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-left ${
                    isActive ? "bg-[#001f5d88] text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-sm truncate">{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1C1D20]">
          <div className="flex items-center space-x-3">
            <div className="flex-1 min-w-0 space-y-4">
              <p className="text-xs text-gray-400 truncate">Chat with Bot</p>
              <p className="text-xs text-gray-400 truncate">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
