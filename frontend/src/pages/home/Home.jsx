import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import './home.css'

export default function Home() {
  return (
    <div>
        <Topbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed></Feed>
            
        </div>
    </div>

  )
}
