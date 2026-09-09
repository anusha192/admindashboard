import React from 'react'
import {
  ArrowRight,
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
  ArrowDownRight
} from 'lucide-react'

const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400"
  },
  {
    title: "Active Users",
    value: "8,549",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+15.3%",
    trend: "up",
    icon: ShoppingCart,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    textColor: "text-violet-600 dark:text-violet-400"
  },
  {
    title: "Conversion Rate",
    value: "45,892",
    change: "-0.4%",
    trend: "down",
    icon: Eye,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    textColor: "text-amber-600 dark:text-amber-400"
  }
]

const StatsGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>

      {stats.map((stats, index) => {
        return (
          <div
            key={index}
            className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/20 transition-all duration-300 group'
          >

            <div className='flex items-start justify-between p-5'>

              <div className='flex-1'>

                <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-2'>
                  {stats.title}
                </p>

                <p className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
                  {stats.value}
                </p>

                <div className='flex items-center space-x-2'>
 
           {stats.trend==="up" ?<ArrowRight className='w-4 h-4 text-emerald-500' />:<ArrowDownRight className='w-4 h-4 text-red-500' />  }

                  <span className={`text-sm font-semibold ${stats.trend==='up'?"text-emerald-500":"text-red-500" }`}>
                    {stats.change}
                  </span>
                

                  <span className='text-sm text-slate-500 dark:text-slate-400'>
                    vs Last months 
                  </span>

                </div>

              </div>

              <div
                className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-110 transition-all duration-300`}
              >
                <stats.icon
                  className={`w-6 h-6 ${stats.textColor}`}
                />
              </div>

            </div>

            {/* Progress Bar */}
          <div className='px-5 pb-5'>
            <div className='mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>

              <div
                className={`h-full  bg-gradient-to-r ${stats.color} rounded-full transition-all duration-100`}
             style ={{width:stats.trend==='up'?"75%" : "45%"}} > 

              </div>

            </div>

          </div>
           </div>
        )
      })}

    </div>
  )
}

export default StatsGrid