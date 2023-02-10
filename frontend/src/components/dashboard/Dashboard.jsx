
import './dashboard.css'
import React , { useState, useEffect} from 'react'

import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Dashboard() {

    const [stdid, setId] = useState("");
    const [date, setDate] = useState("");
    
    function sendData(e){
        e.preventDefault();
        
        const newAtd = {
            stdid,
            date
        }
        
        axios.post("http://localhost:8070/atd/atdAdd",newAtd)
        .then(()=>{
            setId("");
            alert("Attendance is Recorded..!")
            
        }).catch((err)=>{
            alert(err)
        })


    }







  return (
    <div className="dashboard">
        <div className="dashboardWrapper">
            <form onSubmit={sendData}>
            <div className="attendanceBox">
                    <input placeholder='Student Id' className="attendanceInput" value={stdid}
                        onChange={(e)=>{
                          setId(e.target.value);
                          setDate(Date.now());
                        }}
                    />
                    <button type="submit" className="AttendanceButton">Submit</button>
            </div>
            </form >
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
