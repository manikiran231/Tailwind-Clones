import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="font-sans">
      <div className="flex items-center justify-between px-6 py-4 border-b shadow-sm">
        <div className="flex items-center gap-2">
          <img src="https://img.icons8.com/color/48/000000/microsoft.png" alt="Microsoft Logo" className="h-6" />
          <span className="font-semibold text-lg">Microsoft 365</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm">
          <span className="cursor-pointer hover:underline">Products</span>
          <span className="cursor-pointer hover:underline">Plans and pricing</span>
          <span className="cursor-pointer hover:underline">Resources</span>
          <span className="cursor-pointer hover:underline">Support</span>
          <span className="cursor-pointer text-blue-600 hover:underline">Try for free</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm">All Microsoft</span>
          <div className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600">🔍</div>
          <div className="w-8 h-8 border rounded-full flex items-center justify-center text-gray-600">👤</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center px-6 py-16 bg-gray-100">
        <div>
          <h1 className="text-3xl font-bold mb-4">Achieve the extraordinary</h1>
          <p className="text-gray-700 mb-6">
            With Microsoft 365, get spacious cloud storage, advanced security for your data and devices,
            and powerful productivity and creativity apps with AI, all in one plan.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">Buy now</button>
        </div>
        <div className="flex justify-center">
          <img src="https://cdn.iconscout.com/icon/free/png-256/microsoft-365-2985645-2476481.png" alt="365 Icons" className="w-3/4" />
        </div>
      </div>

      <div className="flex items-center justify-center mt-10 gap-6 text-sm">
        <button className="font-bold border-b-2 border-black pb-1">For home</button>
        <button className="text-gray-600 hover:text-black">For business</button>
      </div>

      <div className="flex justify-center gap-4 mt-6 text-sm">
        <button className="px-4 py-2 border rounded bg-blue-100 text-blue-600 font-medium">Paid yearly</button>
        <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">Paid monthly</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 px-6 py-12">
        <div className="border p-6 rounded-lg bg-yellow-50">
          <p className="font-semibold text-yellow-700 mb-2">Save $25.89 with a yearly plan</p>
        </div>
        <div className="border p-6 rounded-lg bg-yellow-50">
          <p className="font-semibold text-yellow-700 mb-2">Save $19.89 with a yearly plan</p>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full shadow-lg">
        <p className="text-blue-800 text-sm">Need help? Let's chat</p>
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Chat Support" className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}

export default App
