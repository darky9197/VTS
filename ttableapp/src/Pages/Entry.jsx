import React, { useState } from 'react'
import styled from 'styled-components';
import velammallogo from "../images/velammallogo.png"


const Formone = ({toggleForm,adminComp})=>{
    return(
        <EntryStyle>
        <div>
            <form action="#">
                <h1>User Entry</h1>
                <input type="text" placeholder='Enter user ID' />
                <input type="password" placeholder='Enter Password' />
                <button onClick={adminComp} type='submit'>Signin</button>
                <button onClick={toggleForm}>Admin Entry</button>
            </form>
        </div>
        </EntryStyle>
    )
};

const Formtwo = ({toggleForm,adminComp})=>{
    return(
        <EntryStyle>
        <div>
            <form action="#">
                <h1>Admin Entry</h1>
                <input type="text" placeholder='Enter Admin ID' />
                <input type="password" placeholder='Enter Password' />
                <button onClick={adminComp} type='submit' >Signin</button>
                <button onClick={toggleForm}>User Entry</button>
            </form>
        </div>
        </EntryStyle>
    )
};
function Entry({adminComp}) {

    const [formView,setFormView] = useState(false)

  return (
    <>
    <EntryStyle>
    <div className='img'>
        <img src={velammallogo} width={700} alt="Technical Error Trying After Some Time" />
        <h2>Time Table Generator</h2>
    </div>
    {formView ? <Formone toggleForm={()=>setFormView(false)} adminComp={adminComp}/> : <Formtwo toggleForm={()=>setFormView(true)} adminComp={adminComp}/>}
    </EntryStyle>
    </>
  )
}


const EntryStyle = styled.div`
div{
display:flex;
justify-content:center;
align-items : center;
}
div h1{
text-align:center;
color:rgb(43, 161, 63);
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
form input,button{
margin-bottom:10px;
margin-top:10px;
font-size:25px;
border-radius:5px;
}
button{
background-color:rgb(66, 245, 93);
border:none;
font-size:20px;
padding:10px;
margin-top:20px;
color:white;
font-weight:bold;
border-radius:5px;
cursor:pointer;
}
button:hover{
background-color:rgb(43, 161, 63);
}
.img{
display:flex;
flex-direction:column;
justify-content:space-between;
color:rgb(12, 27, 145);
}
`
export default Entry
