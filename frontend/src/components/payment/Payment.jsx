import './payment.css';
import { Table , Button} from '@mui/material'
import React , { useState, useEffect} from 'react'

import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Payment() {
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

                <input placeholder='Month' className="atdInput" 
                            // onChange={(e)=>{
                            //     setNotes(e.target.value);
                            // }}
                        />
                <button type='submit' className="atdButton">Search by Month</button>

            </div>
        </div>



        <Table className="atdTable" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Month</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Balance</th>
                        
                    </tr>
                </thead>
                <tbody>
                
                    
                    <tr>
                        <td>1</td>
                        <td>Pubudu Abeywickrama</td>
                        <td>January</td>
                        <td>07-02-2023</td>
                        <td>2000</td>
                        <td>0</td>
                        <td>
                            
                               <Button className='updateButton' onClick="">Delete</Button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pubudu Abeywickrama</td>
                        <td>January</td>
                        <td>07-02-2023</td>
                        <td>1500</td>
                        <td>500</td>
                        
                        <td>
                            
                               <Button className='updateButton' onClick="">Delete</Button></td>
                    </tr>
                    
                </tbody>
            </Table>
    </div>
  )
}
