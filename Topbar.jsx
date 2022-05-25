import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import IMG from '../me.png'



export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Billing Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          <NotificationsIcon/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
           <LanguageIcon/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
           <SettingsIcon/>
          </div>
          <img src={IMG} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}


        
        
        

