import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Student from '../student/Student'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './feed.css'
import Attendance from '../attendance/Attendance';
import Payment from '../payment/Payment';


export default function Feed() {
  return (
    <div className='feed'>
        <BrowserRouter>
            <Routes>
                <Route path="/atd" element={<Dashboard/>}/>
                <Route path="/student" element={<Student/>}></Route>
                <Route path="/atd/attendance" element={<Attendance/>}></Route>
                <Route path="/payment" element={<Payment/>}></Route>

            </Routes>
        </BrowserRouter>
    </div>
  )
}
