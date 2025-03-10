import React from 'react'
import styled from 'styled-components'

function Tableviewform() {
  const msg = ()=>{
    alert("Its under Working");
  }
  return (
    <Formstyle>
    <div className='cont'>
      <form action="">
        <h1>View Time Table</h1><br />
        <select className='dept' >
            <option value="">Choose Department</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AIDS">AIDS</option>
            <option value="MECH">MECH</option>
            <option value="MTS">MTS</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
        </select><br />
        <select name="" id="">
            <option value="">Choose year</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
        </select><br />
        <select name="" id="">
            <option value="">Choose Semester</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
        </select><br />
        <select name="" id="">
            <option value="">Choose Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
        <button onClick={msg} className='view-btn'>View Table</button>
      </form>
    </div>
    </Formstyle>
  )
}
const Formstyle = styled.div`
.cont{
display:flex;
justify-content:center;
align-items : center;
flex-direction:column
}
form select{
width:150px;
padding:5px;
width:100%;
font-size:20px;
border-radius:5px;
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
.view-btn{
background-color:rgb(66, 245, 93);
border:none;
font-size:20px;
padding:10px;
margin-top:20px;
color:white;
font-weight:bold;
border-radius:5px;
}
.view-btn:hover{
background-color:rgb(43, 161, 63);

}
`
export default Tableviewform
