import './attendance.css';
import { Table , Button} from '@mui/material'
import React , { useState, useEffect} from 'react'

import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Attendance() {

    



    const [student, setStudents] = useState([]);

    useEffect(()=> {
        
        getStudents();

        
    }, [])
    function getStudents(){
        axios.get("http://localhost:8070/student/")
            .then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{alert(err)})
    }









  return (
    <div className="attendance">

        <div className="atdBox">
            <div className="atdForm">
                <h4>Search here</h4>
                <input placeholder='Student Id' className="atdInput" 
                            // onChange={(e)=>{
                            //     setNotes(e.target.value);
                            // }}
                        />
                <button type='submit' className="atdButton">Search by ID</button>
                <br></br>

                <input placeholder='Date' className="atdInput" 
                            // onChange={(e)=>{
                            //     setNotes(e.target.value);
                            // }}
                        />
                <button type='submit' className="atdButton">Search by Date</button>

            </div>
        </div>



        <Table className="atdTable" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                
                    
                    <tr>
                        <td>1</td>
                        <td>Pubudu Abeywickrama</td>
                        <td>07-02-2023</td>
                        
                        <td>
                            
                               <Button className='updateButton' onClick="">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pubudu Abeywickrama</td>
                        <td>07-02-2023</td>
                        
                        <td>
                            
                               <Button className='updateButton' onClick="">Delete</Button></td>
                    </tr>
                    
                </tbody>
            </Table>
    </div>
  )
}
