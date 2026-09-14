


const TableSection = () => {
  return (
    <div className="space-y-6">
      {/* recent order */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">

        <div className=" flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:Text-white">Recent Orders</h1>

          </div>
          <p className="text-sm text-slate-500  dark:text-slate-400">
            latest customer order
          </p>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>

        </div>

        </div>
        {/* table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="'text-lefy p-4 tet-sm font-semifold text-slate-600">
                  orderID
                </th>
              </tr>

               <tr>
                <th className="'text-lefy p-4 tet-sm font-semifold text-slate-600">
                  orderID
                </th>
              </tr> <tr>
                <th className="'text-lefy p-4 tet-sm font-semifold text-slate-600">
                  orderID
                </th>
              </tr>
            </thead>

          </table>

        </div>

      </div>
    </div>
  )
}

export default TableSection