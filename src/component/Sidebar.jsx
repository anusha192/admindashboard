import React from 'react'
import profile from '../image/profile.png'

import {
  BarChart3,
  Calendar,
  ChevronDown,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  Settings,
  ShoppingBag,
  Users,
  Zap,
} from 'lucide-react'

const menuItems = [
  {
    id: 'dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
    active: true,
    badge: 'New',
  },

  {
    id: 'analytics',
    icon: BarChart3,
    label: 'Analytics',
    submenu: [
      { id: 'overview', label: 'Overview' },
      { id: 'reports', label: 'Reports' },
      { id: 'insights', label: 'Insights' },
    ],
  },

  {
    id: 'users',
    icon: Users,
    label: 'Users',
    count: '2.4k',
    submenu: [
      { id: 'all-users', label: 'All Users' },
      { id: 'roles', label: 'Roles & Permissions' },
      { id: 'activity', label: 'User Activity' },
    ],
  },

  {
    id: 'ecommerce',
    icon: ShoppingBag,
    label: 'E-commerce',
  },

  {
    id: 'calendar',
    icon: Calendar,
    label: 'Calendar',
  },

  {
    id: 'payments',
    icon: CreditCard,
    label: 'Payments',
  },

  {
    id: 'reports',
    icon: FileText,
    label: 'Reports',
  },

  {
    id: 'messages',
    icon: MessageSquare,
    label: 'Messages',
  },

  {
    id: 'products',
    icon: Package,
    label: 'Products',
  },

  {
    id: 'settings',
    icon: Settings,
    label: 'Settings',
  },
]

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900">

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

        {menuItems.map((item) => {
          return (
            <div key={item.id}>

              {/* Main Menu */}
              <button
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                  item.active
                    ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >

                <div className="flex items-center space-x-3">

                  <item.icon className="w-5 h-5" />

                  <span className="font-medium">
                    {item.label}
                  </span>

                  {/* Badge */}
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {/* Count */}
                  {item.count && (
                    <span className="px-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {item.count}
                    </span>
                  )}

                </div>

                {/* Arrow */}
                {item.submenu && (
                  <ChevronDown className="w-4 h-4" />
                )}

              </button>


              {/* Sub Menu */}
              {item.submenu && (
                <div className="ml-8 mt-2 space-y-1">

                  {item.submenu.map((subitem) => {
                    return (
                      <button
                        key={subitem.id}
                        className="w-full text-left px-3 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {subusitem.label}
                      </button>
                    )
                  })}

                </div>
              )}

            </div>
          )
        })}

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
            <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>
              admin
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Sidebar