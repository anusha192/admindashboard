
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

import React, { useState } from 'react'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Dashboard from './component/Dashboard/Dashboard';

const App = () => {
  const[sidebarcollapsed, setsidebarcollapsed]=useState(false);
  const[currentPage, setCurrentPage]=useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900">

      <div className="flex h-screen overflow-hidden">

        {/* Sidebar */}
        <aside  className={`flex-shrink-0 transition-all duration-300 ${
            sidebarcollapsed ? "w-20" : "w-64"
          }`}>
          <Sidebar collapsed ={sidebarcollapsed} onToggle={()=>setsidebarcollapsed(!sidebarcollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          />
        </aside>

        {/* Right side */}
        <div className="flex flex-1 flex-col overflow-hidden">

          {/* Header */}
          <Header sidebarcollapsed={sidebarcollapsed} onTogglesidebar={()=>setsidebarcollapsed(!sidebarcollapsed)} />

          {/* Main content */}
          <main className="flex-1 overflow-y-auto bg-transparent ">
           <div className='p-6 space-y-6'>
            {currentPage === `dashboard` && <Dashboard/>}
           </div>
          </main>

        </div>

      </div>

    </div>
  )
}

export default App