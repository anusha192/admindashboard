import { Zap } from 'lucide-react'
import React from 'react'
import profile from '../image/profile.png'

const Sidebar = () => {
  return (
    <>
      {/* Logo */}
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">

        <div className="flex items-center space-x-3">

          {/* Logo Icon */}
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>

          {/* Logo Text */}
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Nexus
            </h1>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>

        </div>

      </div>


      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
      </nav>


      {/* User Profile */}
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50 dark:bg-slate-800/50">

        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">

          <img
            src={profile}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500"
          />

          <div className="flex-1 min-w-0">

            <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
              Anusha Subedi
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </>
  )
}

export default Sidebar