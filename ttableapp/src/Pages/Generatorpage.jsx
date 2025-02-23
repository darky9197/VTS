import React, { useRef, useState } from 'react'

function Generatorpage() {
  const [radioVal, setRadioval] = useState(false);
  const [data, setData] = useState([]);

  const subname = useRef()
  const staffId = useRef()
  const count = useRef()


  //insert objects in an array section
  function insertObject() {
    let temp = [...data, { subName: subname.current.value, staff_id: staffId.current.value, isLab: radioVal, count: count.current.value }];
    setData(temp);
  }

  //design section
  const styles = {
    form: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid black"
    },
    input: {
      marginTop: "10px"
    },
    cont: {
      border: "1px solid orange",
      padding: "20px",

    }
  }
  return (
    <>
      <form style={styles.form}>
        <div style={styles.cont}>
          <input type="text" ref={subname} name="subname" placeholder='Enter Subjet/Lab' style={styles.input} /><br />
          <input type="text" ref={staffId} name="staffId" placeholder='Enter Staff ID' style={styles.input} /><br />

          <label style={styles.input} >Is lab</label><br />
          <input type="radio" id="yes" value={true} checked={radioVal === true} onChange={() => setRadioval(true)} />
          <label htmlFor="Yes">Yes</label>

          <input type="radio" id="No" value={false} checked={radioVal === false} onChange={() => setRadioval(false)} />
          <label htmlFor="No">No</label><br />

          <input type="number" ref={count} placeholder='Enter the subject count' name='count' style={styles.input} /><br />
          <button type='reset' onClick={insertObject}>Add</button>
        </div>
      </form>
      <div className='table-container'>
        <table>
          <thead>
            <tr>
              <td>Subject/Lab</td>
              <td>Staff ID</td>
              <td>isLab?</td>
              <td>count</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((data, index) => {
                <tr key={index}>
                  <td>{data.subName}</td>
                  <td>{data.staff_id}</td>
                  <td>{data.isLab}</td>
                  <td>{data.count}</td>
                </tr>
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default Generatorpage