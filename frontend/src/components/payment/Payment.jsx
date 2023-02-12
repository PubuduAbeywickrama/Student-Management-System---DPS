import './payment.css';
import { Table , Button} from '@mui/material'
import React , { useState, useEffect} from 'react'

import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Payment() {
  return (
    <div className="attendance">

        <form className = "formcontainer">

        <div className="addStudentBox">

            <div className="addStudentForm">
                <div className="addStudentFormLeft">
                    <h4>Add Payment</h4>
                    <input placeholder='Student ID' className="stdInput" value=""
                        // onChange={(e)=>{
                        //     setId(e.target.value);
                        // }}
                    />
                     <select placeholder='Month' className="stdInput"  value=""
                        // onChange={(e)=>{
                        //     setContactNumber(e.target.value);
                        // }}
                    >
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <input placeholder='Payment' className="stdInput"  
                        // onChange={(e)=>{
                        //     setAddress(e.target.value);
                        // }}
                    />
                    <input placeholder='Balance' className="stdInput"  value=""
                        // onChange={(e)=>{
                        //     setGender(e.target.value);
                        // }}
                    />
                    <button type='submit' className="saveButton">Add Payment</button>
                
                </div>

                <div className="addStudentFormRight">
                    <h4>Search Here</h4>
                    <input placeholder='Student Id' className="stdInput"  value=""
                        // onChange={(e)=>{
                        //     setParentName(e.target.value);
                        // }}
                    />
                    <button type='submit' className="searchButton">Search by ID</button>


                    <select placeholder='Month' className="stdInput"  value=""
                        // onChange={(e)=>{
                        //     setContactNumber(e.target.value);
                        // }}
                    >
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    
                    <button type='submit' className="searchButton">Search By Month</button>
                    

                </div>
                
            
            </div>
            
        </div>
        </form>



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
