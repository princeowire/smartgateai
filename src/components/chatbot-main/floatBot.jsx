import React, { useState } from "react";
import { MessagesSquareIcon, X } from "lucide-react";
import BotChat from "./botChat";

const FloatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {/* BotChat popup */}
      {open && (
        <div className="mb-3 w-80 h-96 text-black shadow-xl overflow-hidden">
          <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-amber-400">
            <h3 className="font-semibold text-sm">SmartGate AI Bot</h3>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className=" h-[calc(100%-3rem)] overflow-y-auto">
            <BotChat />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-amber-400 p-4 rounded-full shadow-lg hover:bg-amber-500 transition"
      >
        <MessagesSquareIcon />
      </button>
    </div>
  );
};

export default FloatBot;
