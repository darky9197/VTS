import React, { useRef, useState } from 'react'

function Generatorpage() {
  const [radioVal,setRadioval] = useState("")
  const subname = useRef()
  const staffId = useRef()
  const count = useRef()
  const values = useRef()

  let datas=[]

  //radio value access section
  const handleChange = (val)=>{
    setRadioval(val)
  }

  //insert objects in an array section
  const insertObject = ()=>{
    datas.push({subName:subname.current.value,staff_id:staffId.current.value,isLab:radioVal,count:count.current.value})
    console.log(datas)
  }
  
  //design section
  const styles = {
    form:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border:"1px solid black"
    },
    input:{
      marginTop:"10px"
    },
    cont:{
      border:"1px solid orange",
      padding:"20px",

    }
  }
  return (
    <>
        <form style={styles.form}>
            <div style={styles.cont}>
                <input type="text" ref={subname} name="subname" placeholder='Enter Subjet/Lab' style={styles.input}/><br />
                <input type="text" ref={staffId} name="staffId" placeholder='Enter Staff ID' style={styles.input}/><br />
                
                <label style={styles.input} >Is lab</label><br />
                <input type="radio" id="yes" value='Yes' checked={radioVal==="Yes"} onChange={()=>handleChange("Yes")}/>
                <label htmlFor="Yes">Yes</label>
        
                <input type="radio" id="No" value="No" checked={radioVal==="No" } onChange={()=>handleChange("No")}/>
                <label htmlFor="No">No</label><br />

                <input type="number" ref={count} placeholder='Enter the subject count' name='count' style={styles.input} /><br />
                <button type='reset' onClick={insertObject}>Add</button>
            </div>
        </form>
        <h1 ref={values}></h1>
    </>
  )
}

export default Generatorpage