import './dashboard.css'
import React , { useState} from 'react'
import axios from 'axios'
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
        <h4>Submit Attendance</h4>
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
            
        </div>
    </div>
  )
}
