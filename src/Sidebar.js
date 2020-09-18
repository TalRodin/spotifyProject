import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcone from '@material-ui/icons/Home'
import SearchIcone from '@material-ui/icons/Search'
import LibraryMusicIcone from '@material-ui/icons/LibraryMusic'
import { Slide } from '@material-ui/core'
import {useDataLayerValue} from "./DataLayer"

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue()
    return (
        <div className='sidebar'>
            <img
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt="s"
            ></img>
            <SidebarOption Icon = {HomeIcone} title="Home"/>
            <SidebarOption Icon = {SearchIcone} title="Search"/>
            <SidebarOption Icon = {LibraryMusicIcone} title="Your library"/>
        
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist=>(
                <SidebarOption title={playlist.name}/>
            ))}

        </div>
    )
}

export default Sidebar
