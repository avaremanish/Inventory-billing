import React from 'react'
import  './Widgetsm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Widgetsm() {
  return (
    <div className='widgetsm' > 
    <span className="widgetSmTitle">New product</span>
<ul className="widgetSmList">
      <li className="widgetSmListItem">
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275"
            alt=''
            className='widgetSmImg'/>
            <div className="widgetSmUser">
                  <span className="widgetSmUsername">Iphone 13 pro</span>
                  <span className="widgetSmUserTitle">Apple</span>
            </div>
            <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon"/>
                Display
            </button>
      </li>

      <li className="widgetSmListItem">
            <img src="https://5.imimg.com/data5/HQ/XC/XT/SELLER-88033290/twins-airpod-500x500.jpg"
             alt=''
             className='widgetSmImg'/>
            <div className="widgetSmUser">
                  <span className="widgetSmUsername">Ear pods</span>
                  <span className="widgetSmUserTitle">Iphone 13 pro</span>
            </div>
            <button className="widgetSmButton">
                <VisibilityIcon/>
                Display
            </button>
      </li>

      <li className="widgetSmListItem">
            <img src="data:image/jpeg;base64,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"
             alt=''
             className='widgetSmImg'/>
            <div className="widgetSmUser">
                  <span className="widgetSmUsername">Iphone 13 Min</span>
                  <span className="widgetSmUserTitle">Apple</span>
            </div>
            <button className="widgetSmButton">
                <VisibilityIcon/>
                Display
            </button>
      </li>

      <li className="widgetSmListItem">
            <img src="data:image/jpeg;base64,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"
             alt=''
             className='widgetSmImg'/>
            <div className="widgetSmUser">
                  <span className="widgetSmUsername">Iphone 12 pro</span>
                  <span className="widgetSmUserTitle">Apple</span>
            </div>
            <button className="widgetSmButton">
                <VisibilityIcon/>
                Display
            </button>
      </li>

      <li className="widgetSmListItem">
            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FQKW2?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1517334319257"
             alt=''
             className='widgetSmImg'/>
            <div className="widgetSmUser">
                  <span className="widgetSmUsername">Apple Watch Series 7</span>
                  <span className="widgetSmUserTitle">Apple</span>
            </div>
            <button className="widgetSmButton">
                <VisibilityIcon/>
                Display
            </button>
      </li>

      <li className="widgetSmListItem">
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645552346275"
             alt=''
             className='widgetSmImg'/>
            <div className="widgetSmUser">
                  <span className="widgetSmUsername">Apple</span>
                  <span className="widgetSmUserTitle">Iphone 13 pro</span>
            </div>
            <button className="widgetSmButton">
                <VisibilityIcon/>
                Display
            </button>
      </li>

</ul>
    
    
    
    </div>
  )
}
