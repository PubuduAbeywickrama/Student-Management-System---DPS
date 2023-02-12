import './payment.css';
import { Table , Button} from '@mui/material'
import React , { useState, useEffect} from 'react'

import axios from 'axios'



export default function Payment() {
    var today = new Date(),
    today_date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const [stdid, setId] = useState("");
    const [month, setMonth] = useState("");
    const [date, setDate] = useState(today_date);
    const [pay, setPay] = useState("");
    const [bal, setBal] = useState("");
    
    const [payment, setPayments] = useState([]);
    

    useEffect(()=> {
        
        getPayments();
        if (pay>0) {
            setBal(()=> 2000-pay)
        }
        if(pay==0){
            setBal(()=> "No Balance")
        }
        
        
    }, [pay])

    function sendData(e){
        e.preventDefault();
        
        const newPayment = {
            stdid,
            month,
            date,
            pay,
            bal
        }
        
        axios.post("http://localhost:8070/payment/payAdd",newPayment)
        .then((res)=>{
            getPayments()
            setId("");
            setMonth("");
            
            setPay("");
            setBal("");
            
            alert("Payment Added..!")
            
        }).catch((err)=>{
            alert(err)
        })


    }


    const onUpdate = (id) =>{

        const item = payment.find((i) => i.id === id);
        
        axios.get(`http://localhost:8070/payment/get/${id}`).then((res) =>{
            
            setId(res.data.payment.stdid);
            setMonth(res.data.payment.month);
            setDate(res.data.payment.date);
            setPay(res.data.payment.pay);
            setBal(res.data.payment.bal);
           
        })
        
    }
  

    function getPayments(){
        axios.get("http://localhost:8070/payment/")
            .then((res)=>{
                setPayments(res.data);
            }).catch((err)=>{alert(err)})
    }

    const onDelete = (id) =>{
        console.log(id);
        axios.delete(`http://localhost:8070/payment/delete/${id}`).then((res) =>{
            alert("Delete Successfull")
            getPayments()
        })
        
    }




  return (
    <div className="attendance">

        <form onSubmit={sendData} className = "formcontainer">

        <div className="addStudentBox">

            <div className="addStudentForm">
                <div className="addStudentFormLeft">
                    <h4>Add Payment</h4>
                    <input placeholder='Student ID' className="stdInput" value={stdid}
                        onChange={(e)=>{
                            setId(e.target.value);
                        }}
                    />
                     <select placeholder='Month' className="stdInput"  value={month}
                        onChange={(e)=>{
                            setMonth(e.target.value);
                            
                        }}
                    >
                        <option value={"January"}>January</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        <option value={"June"}>June</option>
                        <option value={"July"}>July</option>
                        <option value={"August"}>August</option>
                        <option value={"September"}>September</option>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
                    </select>
                    <input placeholder='Date' className="stdInput" value={date} 
                        onChange={(e)=>{
                            setDate(e.target.value);
                        }}
                    />
                    <input placeholder='Payment' className="stdInput" value={pay} 
                        onChange={(e)=>{
                            setPay(e.target.value);
                        }}
                    />
                    <input placeholder='Balance' className="stdInput"  value={bal}
                        onChange={(e)=>{
                            setBal(e.target.value);
                        }}
                    />
                    <button type='submit'  className="saveButton">Add Payment</button>
                
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
                        <option value={"January"}>January</option>
                        <option value={"February"}>February</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        <option value={"June"}>June</option>
                        <option value={"July"}>July</option>
                        <option value={"August"}>August</option>
                        <option value={"September"}>September</option>
                        <option value={"October"}>October</option>
                        <option value={"November"}>November</option>
                        <option value={"December"}>December</option>
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
                        <th>Month</th>
                        <th>Date</th>
                        <th>Payment</th>
                        <th>Balance</th>
                        
                    </tr>
                </thead>
                <tbody>
                
                    
                {payment.map(item=>
                    <tr>
                        <td>{item.stdid}</td>
                        <td>{item.month}</td>
                        <td>{item.date}</td>
                        <td>{item.pay}</td>
                        <td>{item.bal}</td>
                        
                        <td>
                            
                            <Button className='editButton' onClick={()=>onUpdate(item._id)}>Edit</Button>   <Button className='updateButton' onClick={()=>onDelete(item._id)}>Delete</Button></td>
                    </tr>
                    )}
                    
                </tbody>
            </Table>
    </div>
  )
}
