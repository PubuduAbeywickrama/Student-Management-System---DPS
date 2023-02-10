import { Table , Button} from '@mui/material'
import React , { useState, useEffect} from 'react'
import './student.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Student() {

    const [stdid, setId] = useState("");
    const [fullname, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [parentname, setParentName] = useState("");
    const [contactnumber, setContactNumber] = useState("");
    const [notes, setNotes] = useState("");
    const navigate = useNavigate();
   // const [itemlist, setItemList] = useState([]);
    function sendData(e){
        e.preventDefault();
        
        const newStudent = {
            stdid,
            fullname,
            address,
            gender,
            dob,
            parentname,
            contactnumber,
            notes
        }
        
        axios.post("http://localhost:8070/student/add",newStudent)
        .then(()=>{
            getStudents()
        }).catch((err)=>{
            alert(err)
        })


    }


    const onUpdate = (id) =>{

        const item = student.find((i) => i.id === id);
        
        axios.get(`http://localhost:8070/student/get/${id}`).then((res) =>{
            console.log(res.data.student);
            setId(res.data.student.stdid);
            setName(res.data.student.fullname);
            setAddress(res.data.student.address);
            setGender(res.data.student.gender);
            setDob(res.data.student.dob);
            setParentName(res.data.student.parentname);
            setContactNumber(res.data.student.contactnumber);
            setNotes(res.data.student.notes);
            
        })
        
    }
    // const clickUpdate = (id) =>{
    //     axios.get(`http://localhost:8070/student/update/${id}`).then((res) =>{
            
    // })
    // }






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

    const onDelete = (id) =>{
        console.log(id);
        axios.delete(`http://localhost:8070/student/delete/${id}`).then((res) =>{
            alert("Delete Successfull")
            getStudents()
        })
        
    }
    





  return (
    <div className="student">
            <h4 className="addstudent">Add Student</h4>

            <form onSubmit={sendData} className = "formcontainer">

            <div className="addStudentBox">

                <div className="addStudentForm">
                    <div className="addStudentFormLeft">
                        <input placeholder='Student ID' className="stdInput" value={stdid}
                            onChange={(e)=>{
                                setId(e.target.value);
                            }}
                        />
                        <input placeholder='Student Name' className="stdInput"  value={fullname}
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}
                        />
                        <input placeholder='Student Address' className="stdInput"  value={address}
                            onChange={(e)=>{
                                setAddress(e.target.value);
                            }}
                        />
                        <input placeholder='Gender' className="stdInput"  value={gender}
                            onChange={(e)=>{
                                setGender(e.target.value);
                            }}
                        />
                        <input placeholder='Date of Birth' className="stdInput"  value={dob}
                            onChange={(e)=>{
                                setDob(e.target.value);
                            }}
                        />
                    
                    </div>

                    <div className="addStudentFormRight">
                        <input placeholder='Parent Name' className="stdInput"  value={parentname}
                            onChange={(e)=>{
                                setParentName(e.target.value);
                            }}
                        />
                        <input placeholder='Contact Number' className="stdInput"  value={contactnumber}
                            onChange={(e)=>{
                                setContactNumber(e.target.value);
                            }}
                        />
                        <input placeholder='Remarks' className="stdInput"  value={notes}
                            onChange={(e)=>{
                                setNotes(e.target.value);
                            }}
                        />
                        <button type='submit' className="saveButton">Save</button>
                        <button type='submit' className="updateButton" onClick="" >Update</button>

                    </div>
                    
                
                </div>
                
            </div>
            </form>
            <h4 className="addstudent">Student data</h4>
            
            <Table className="stdTable" striped border hover size="sm">
                <thead>
                    <tr>
                        <th>Student Id</th>
                        <th>Student Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Parent Name</th>
                        <th>Contact Number</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                
                    {student.map(item=>
                    <tr>
                        <td>{item.stdid}</td>
                        <td>{item.fullname}</td>
                        <td>{item.address}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                        <td>{item.parentname}</td>
                        <td>{item.contactnumber}</td>
                        <td>{item.notes}</td>
                        <td>
                            
                            <Button className='editButton' onClick={()=>onUpdate(item._id)}>Edit</Button>   <Button className='updateButton' onClick={()=>onDelete(item._id)}>Delete</Button></td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
  )
}
