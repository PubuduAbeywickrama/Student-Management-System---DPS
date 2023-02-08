import React from 'react'
import './dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard">
        <div className="dashboardWrapper">
            <div className="attendanceBox">
                    <input placeholder='Student Id' className="attendanceInput" />
                    <button className="AttendanceButton">Submit</button>
            </div>
            
            <div className="attendanceCountBox">
                <span className="countText">Today Count : 25</span>
                <hr className='sidebarHr'/>
                <span className="countText">Total Students : 55</span>
                <span className="countText">Boys  : 30</span>
                <span className="countText">Girls  : 25</span>

            </div>
        </div>
    </div>
  )
}
