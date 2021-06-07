import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'

function Sidebar() {
    return (
        <div className="sidebar">
            <img 
                className="sidebar__logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                alt="" />
            <SidebarOptions title = "Home"/>
            <SidebarOptions title = "Search"/>
            <SidebarOptions title = "Your Libray"/>
            
        </div>
    )
}

export default Sidebar
