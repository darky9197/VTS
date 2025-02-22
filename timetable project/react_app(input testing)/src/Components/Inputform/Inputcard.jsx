import style from "./style.module.css";
import PropType from 'prop-types'

function Inputcard(props) {
  const { children, index , handledelete} = props;
  return (
    <>
      <div className={style.flex__input}>
        {children}
        <div>
          <button onClick={
            ()=>{
              handledelete(index)
            }
          }>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

Inputcard.propTypes = {
  children:PropType.node,
  index:PropType.number,
  handledelete:PropType.func,
}

export default Inputcard;
