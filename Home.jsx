import React from 'react'

import FeaturedInfo from '../../components/featuredinfo/featuredInfo'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import Widgetsm from '../../components/widgetsm/Widgetsm'



import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
       
        <div className="homewidgets">
          <Widgetsm/>
          <WidgetLg/>
          
          
          
           </div> 
                     
                                            




    </div>
  )
}
