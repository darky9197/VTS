import React, { useState } from 'react'
import Tableviewform from './Tableviewform'
import styled from 'styled-components'

function AdminView() {
    const [radioval,setRadio] = useState("Yes");
    const [sesseion, setSession] = useState("Morning");

    const radioChange = (value)=>{  
        setRadio(value);
    }
    const changeSession = (val)=>{
        setSession(val)
    }
  return (
    <Admin_view_comp>
    <div className='adminview'>
        <Tableviewform/>
        <h1>Generate Table</h1>
        <form action="">
            <input type="text" placeholder='Enter Staff ID' />
            <input type="text" placeholder='Enter Subject Name' /><br />
            <label htmlFor="">Is Lab</label>
            <div className='lab'>
            <input type="radio" id='Yes' value={"Yes"} checked={radioval==="Yes"} onChange={()=>{radioChange("Yes")}}  />Yes
            <input type="radio" id='No'  value={"No"} checked={radioval==="No"} onChange={()=>{radioChange("No")}}  />No
            </div>
            <div className='session'>
            <input type="radio" id='fn'  value={"Morning"} checked={sesseion==="Morning"} onChange={()=>{changeSession("Morning")}}  />Morning
            <input type="radio" id='an'  value={"Afternoon"} checked={sesseion==="Afternoon"} onChange={()=>{changeSession("Afternoon")}}  />Afternoon
            </div>
        </form>
    </div>
    </Admin_view_comp>
  )
}

const Admin_view_comp = styled.div`
.adminview{
display:flex;
justify-content:Space-between;
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
