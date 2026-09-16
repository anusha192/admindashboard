import {MoreHorizontal , TrendingDown, TrendingUp} from 'lucide-react'
const recentOrders = [
  {
    id: "#B34847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#B34848",
    customer: "Sarah Johnson",
    product: "iPhone 15 Pro",
    amount: "$1,199",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "#B34849",
    customer: "Mike Wilson",
    product: "AirPods Pro",
    amount: "$249",
    status: "completed",
    date: "2024-01-14",
  },
  {
    id: "#B34850",
    customer: "Emily Davis",
    product: "iPad Air",
    amount: "$599",
    status: "cancelled",
    date: "2024-01-14",
  },
  
];
 const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 1247,
    revenue: "$2,987,530",
    trend: "up",
    change: "+12%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 2156,
    revenue: "$2,587,844",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro",
    sales: 3245,
    revenue: "$845,670",
    trend: "up",
    change: "+15%",
  },
  {
    name: "iPad Pro 12.9",
    sales: 987,
    revenue: "$1,184,400",
    trend: "up",
    change: "+10%",
  },
  {
    name: "Apple Watch Series 9",
    sales: 1432,
    revenue: "$716,000",
    trend: "up",
    change: "+7%",
  },
  {
    name: "Samsung Galaxy S24",
    sales: 1876,
    revenue: "$1,501,000",
    trend: "up",
    change: "+11%",
  },
  {
    name: "Dell XPS 15",
    sales: 756,
    revenue: "$1,134,000",
    trend: "down",
    change: "-4%",
  },
  {
    name: "Sony WH-1000XM5",
    sales: 2134,
    revenue: "$640,200",
    trend: "up",
    change: "+9%",
  },
  {
    name: "Samsung Galaxy Tab S9",
    sales: 845,
    revenue: "$591,500",
    trend: "down",
    change: "-3%",
  },
  {
    name: "Logitech MX Master 3S",
    sales: 2678,
    revenue: "$267,800",
    trend: "up",
    change: "+18%",
  },
];
const TableSection = () => {
  const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";

    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

    case "cancelled":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
  }
};
  return (
    <div className="space-y-6">
      {/* recent order */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">

        <div className=" flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-white">Recent Orders</h1>

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
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  orderID
                </th>
              
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
              
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                 <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
               
              </tr>
             </thead>
              <tbody>
               {recentOrders.map((order , index)=>{
                return(
                 <tr className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 translation-colors" >
                <td className="p-4" key={index}>
                  <span className="text-sm font-medium  dark:text-white">
                    {order.id}
                  </span>


                </td>
                <td className="p-4">
                  <span className="text-sm font-medium dark:text-white">
                    {order.customer}
                  </span>
                  

                </td>
                <td className="p-4">
                  <span className="text-sm font-medium dark:text-white">
                   {order.product}
                  </span>
                  

                </td>
                <td className="p-4">
                  <span className="text-sm font-medium dark:text-white">
                    {order.amount}
                  </span>
                  

                </td>
                <td className="p-4">
                  <span className={`text-slate-400 dark:text-white font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                    {order.date}
                  </span>
                  

                </td>
                <td className="p-4">
                  <span className="text-sm font-medium text-blue">
                <MoreHorizontal className ="w-4 h-4"/>
                  </span>
                  

                </td>

                </tr>
                );
               })}
              </tbody>

          </table>

        </div>
        {/*  Top product*/}
            <div className='bg-white/-80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50 '>
              <div className='flex items-center justify-between '>
             <div className='text-lg font-bold text-slate-800 dark:text-white'>
               <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
             </div>
             <p className='text-sm text-slate-500 dark:text-slate-400'>
              best performing produts
             </p>

              </div>
              <button className='text-blue-600 hover:text-blue-700 text-sm font-medium '> View All</button>
            </div>
            {/* dynamic data */}
             <div className='p-6 space-y-4'>
              {topProducts.map((Product , index)=>{

                return(
                <div className='flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'>
              <div className='flex-1' key={index}>
                <h4 className='text-sm font-medium  font-semibold text-slate-800 dark:text-white '> {Product.name}</h4>
                <p className='text-xs text-slate-500 dark:text-slate-400'>{Product.sales}</p>
              </div>
              <div className='text-rights'>
                <p className='text-sm font-semibold text-slate-800 dark:text-white'> {Product.revenue}</p>
                <div className='flex items-center space-x-1'>
                  {Product.trend=='up'?<TrendingUp className='w-3 h-3 text-emerald-500'/>:(<TrendingDown className='w-3 h-3 text-red-500'/>)}
                  <span className={`text-xs font-medium ${Product.trend ==='up' ?"text-emerald-500":"text-red-500"} `}>{Product.change}</span>
                </div>
              </div>
              </div>
             
                );
              })}
            </div>
            </div>
      </div>
    </div>
  )
}

export default TableSection