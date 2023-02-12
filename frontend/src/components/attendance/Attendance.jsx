import './attendance.css';
import { Table , Button} from '@mui/material'
import React , { useState, useEffect} from 'react'

import axios from 'axios'



export default function Attendance() {

    



    const [atd, setAtd] = useState([]);

    useEffect(()=> {
        
        getAtd();

        
    }, [])
    function getAtd(){
        axios.get("http://localhost:8070/atd/attendance")
            .then((res)=>{
                setAtd(res.data);
            }).catch((err)=>{alert(err)})
    }

    const onDelete = (id) =>{
        console.log(id);
        axios.delete(`http://localhost:8070/atd/attendance/delete/${id}`).then((res) =>{
            alert("Delete Successfull")
            getAtd()
        })
        
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
        {/* {()=>onDelete(item._id)} */}
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Date</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {atd.map(item=>
                        <tr>
                            <td>{item.stdid}</td>
                            <td>{item.date}</td>
                            
                            <td>
                                
                            <Button className='updateButton' onClick={()=>onDelete(item._id)}>Delete</Button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
    </div>
  )
}
