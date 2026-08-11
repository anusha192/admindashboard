
// import React from 'react'
// import Sidebar from './component/Sidebar'
// import Header from './component/Header'

// const App = () => {
//   return (
//     <>
//     <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 transition-all duration-500'>
//       <div className='flex h-screen overflow-hidden '>
//     <Sidebar/>
    
//     <div className='flex flex-1 flex-col overflow-hidden'>
//       <Header/>
//     </div>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default App

import React from 'react'
import Sidebar from './component/Sidebar'
import Header from './component/Header'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">

      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <aside className="w-64 flex-shrink-0">
          <Sidebar />
        </aside>

        {/* Right side */}
        <div className="flex flex-1 flex-col overflow-hidden">

          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="flex-1 overflow-y-auto p-6">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
              Dashboard Content
            </h2>
          </main>

        </div>

      </div>

    </div>
  )
}

export default App