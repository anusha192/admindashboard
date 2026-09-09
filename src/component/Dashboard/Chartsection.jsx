import React from 'react'

import RevneuChart from './RevneuChart'
const Chartsection = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gqp-6'>
        <div className='xl:col-span-2'>
            <RevneuChart/>
        </div>
    </div>
  )
}

export default Chartsection