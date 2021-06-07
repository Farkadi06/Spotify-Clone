import React from 'react'
import './Sidebar.css'
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{playlists},dispatch] = useDataLayerValue()
    console.log("cheeckout  :",playlists)
    return (
        <div className="sidebar">
            <img 
                className="sidebar__logo"
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" 
                alt="" />
            <SidebarOptions Icon={HomeIcon} title = "Home"/>
            <SidebarOptions Icon={SearchIcon} title = "Search"/>
            <SidebarOptions Icon={LibraryMusicIcon} title = "Your Libray"/>
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlists => (
                <SidebarOptions title={playlists.name}/>
            ))}
 
        </div>
    )
}

export default Sidebar
