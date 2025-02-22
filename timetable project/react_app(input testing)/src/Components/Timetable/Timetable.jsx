import style from "./style.module.css";
import PropType from 'prop-types'


  

function Timetable(props) {

  const { arr } = props;
  let controller_1 = 0;

  function execute(){
    document.querySelectorAll(".sub_data_an").forEach((element) => {
      element.textContent = arr[Math.floor(Math.random() * arr.length)];
    });
    document.querySelectorAll(".sub_data").forEach((element) => {
      element.textContent = arr[Math.floor(Math.random() * arr.length)];
    });
  }

  if(controller_1 == 1){
    execute();
    controller_1 = 0;
  }

  return (
    <>
      <table className="table__container">
        <thead>
          <tr>
            <th rowSpan="2">Period/Days</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>Break</th>
            <th>4</th>
            <th>5</th>
            <th>Lunch break</th>
            <th>6</th>
            <th>7</th>
          </tr>
          <tr>
            <th>8.30Am - 9.20Am</th>
            <th>9.20Am - 10.10Am</th>
            <th>10.10Am - 11.00Am</th>
            <th>11.00Am - 11.15Am</th>
            <th>11.15Am - 12.05Pm</th>
            <th>12.05Pm - 12.50Pm</th>
            <th>12.50Pm - 1.30Pm</th>
            <th>1.30Pm - 2.20Pm</th>
            <th>2.20pm - 3.15Pm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Monday</th>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <th rowSpan="6" className={style.break}>
              Break
            </th>
            <td className="sub_data_an"></td>
            <td className="sub_data"></td>
            <th rowSpan="6" className={style.break}>
              Lunch break
            </th>
            <td className="sub_data"></td>
            <td className="sub_data"></td>
          </tr>
          <tr>
            <th>Tuesday</th>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td colSpan="2"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data"></td>
          </tr>
          <tr>
            <th>Wednesday</th>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <th>Thursday</th>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td colSpan="2"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <th>Friday</th>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data"></td>
            <td colSpan="2"></td>
          </tr>
          <tr>
            <th>Saturday</th>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data_an"></td>
            <td className="sub_data"></td>
            <td className="sub_data"></td>
            <td className="sub_data"></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

Timetable.propTypes = {
  arr:PropType.array,
}

export default Timetable;
