import SalesChart from './salesChart'

import RevneuChart from './RevneuChart'
const Chartsection = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='xl:col-span-2'>
            <RevneuChart/>
        </div>
        <div className='space-y-6'>
          <SalesChart/>

        </div>
    </div>
  )
}

export default Chartsection