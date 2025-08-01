'use client';

import React, { useState } from 'react';
import { Copy } from 'lucide-react';

// 👉  Put your real contract address here
const CONTRACT_ADDRESS = '7xadAU5f8grUYLGq6XmsGvj5YkjiSHB6BQrdSy9mj1Ua';

export default function CAPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy CA:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black">OFFICIAL CA</h1>
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <code className="text-lg md:text-xl font-mono text-black text-center break-all">
            {CONTRACT_ADDRESS}
          </code>
          <button
            onClick={handleCopy}
            className="p-2 hover:bg-gray-100 transition-colors rounded-lg"
            title="Copy to clipboard"
          >
            <Copy className="w-6 h-6 text-black" />
          </button>
        </div>
        {copied && (
          <p className="text-green-600 text-sm">Copied to clipboard!</p>
        )}
        <a href="/">
          <button className="relative px-8 py-4 bg-[#facc15] skew-x-[-12deg] hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 border-[4px] border-black -z-10 shadow-[4px_4px_0_#000]" />
            <div className="text-black text-2xl md:text-3xl font-extrabold inline-block skew-x-[12deg]">
              Back to Home
            </div>
          </button>
        </a>
      </div>
    </div>
  );
} 