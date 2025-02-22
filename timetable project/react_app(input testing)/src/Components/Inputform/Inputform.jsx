import { useState } from 'react'
import Inputcard from './Inputcard'
import style from './style.module.css'
import PropType from 'prop-types'


function Inputform(props) {

  const { handlesubs,subs } = props;
  
  const [subvalue,setsubvalue] = useState('');

  return (
    <>
      <div className={style.input__container}>
          <div className={style.flex}>
            <div className={style.input__card}>
              <h2>Insert Subjects</h2>

              <div className={style.form}>
                <input type='text' value={subvalue} onChange={(e)=>{
                  setsubvalue(e.target.value.toString())
                }}/>
                <button onClick={()=>{
                  handlesubs(subvalue)
                  setsubvalue('')
                }}>Set</button>
              </div>

              <div className={style.input__grid}>

                {subs.map((subs,subs_index)=>{
                  return(
                    <Inputcard key={subs_index} {...props} index = {subs_index}>
                      <p>{subs}</p>
                    </Inputcard>
                  )
                })}

              </div>
            </div>
            <div className={style.input__card}>
              <h2>Insert Labs</h2>
              <div className={style.form}>
                <input type="text" />
                <button>Set</button>
              </div>
            </div>
          </div>
          <div>
                <button >Set</button>
          </div>
      </div>
    </>
  )
}

Inputform.propTypes = {
  handlesubs: PropType.func,
  subs: PropType.array,
}

export default Inputform