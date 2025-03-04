import React from 'react'
import styled from 'styled-components'

function Tableviewform() {
  return (
    <Formstyle>
    <div className='cont'>
      <form action="">
        <label htmlFor="">Choose the option to view Time Table</label><br />
        <label htmlFor="">Choose a Department : </label>
        <select className='dept'  aria-placeholder='Choose a dept'>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AIDS">AIDS</option>
            <option value="MECH">MECH</option>
            <option value="MTS">MTS</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
        </select>
        <label htmlFor="">Year</label>
        <select name="" id="">
            <option value="">Choose year</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>

        </select>
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
}
form select{
width:150px;
padding:5px;

}
`
export default Tableviewform
