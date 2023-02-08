import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import Student from '../student/Student'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './feed.css'


export default function Feed() {
  return (
    <div className='feed'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/student" element={<Student/>}></Route> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}
