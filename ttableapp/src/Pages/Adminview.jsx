import React, { useState } from 'react'
import Tableviewform from './Tableviewform'
import styled from 'styled-components'

function AdminView() {
    const [radioval,setRadio] = useState("");
    const [sesseion, setSession] = useState("");

    const radioChange = (value)=>{  
        setRadio(value);
    }
    const changeSession = (val)=>{
        setSession(val)
    }
  return (
    <Admin_view_comp>
        <h1>Admin View</h1>
    <div className='adminview'>
        <Tableviewform/>
        <form action="#">
            <h1>Generate Table</h1>
            <input type="text" placeholder='Enter Staff ID' />
            <input type="text" placeholder='Enter Subject Name' /><br />
            <label htmlFor="">Is Lab</label>
            <div className='lab'>
                <div>
                    <input type="radio" id='Yes' value={"Yes"} checked={radioval==="Yes"} onChange={()=>{radioChange("Yes")}}  />Yes
                </div>
                <div>
                    <input type="radio" id='No'  value={"No"} checked={radioval==="No"} onChange={()=>{radioChange("No")}}  />No
                </div>
            </div>
            <label htmlFor="">Choose Session</label>
            <div className='session'>
                <div>
                    <input type="radio" id='fn'  value={"Morning"} checked={sesseion==="Morning"} onChange={()=>{changeSession("Morning")}}  />Morning
                </div>
                <div>
                    <input type="radio" id='an'  value={"Afternoon"} checked={sesseion==="Afternoon"} onChange={()=>{changeSession("Afternoon")}}  />Afternoon
                </div>
            </div>
            <input type="number" placeholder='Enter Subject Count'/>
            <input type="number" placeholder='Lab Period Count'/>
            <button type='submit' className='generatebtn'>Generate Table</button>

        </form>
    </div>
    </Admin_view_comp>
  )
}

const Admin_view_comp = styled.div`
.adminview{
display:flex;
justify-content:Space-evenly;
}
.adminview input{
margin-top:20px;
border-radius:5px;
}
.lab,.session{
display:flex;
flex-direction:row;
justify-content:space-around;
}
.generatebtn{
background-color:rgb(66, 245, 93);
border:none;
font-size:20px;
padding:10px;
margin-top:20px;
color:white;
font-weight:bold;
border-radius:5px;
}
.generatebtn:hover{
background-color:rgb(43, 161, 63);
}
form{
display:flex;
flex-direction:column;
padding:25px;
margin-top:25px;
width:400px;
border-radius:10px;
box-shadow: 0px 7px 55px 13px rgba(0,0,0,0.24);
}
`
export default AdminView
