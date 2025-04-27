import { Weekdays, DayData, TableData, UserInput, Settings } from "./Types";
import { userdata } from "./userdata";
import TData from "../local_database/tabledata.json";

const table_data: TableData[] = TData;


function randgen(range: number): number {
  return Math.floor(Math.random() * range);
}

function generator(arr: DayData[]) {
  let temp = [...arr],
    result: DayData[] = [],
    last = 0;
  while (temp.length > 1) {
    let rand = randgen(temp.length);
    if (rand != last) {
      result.push(temp.splice(rand, 1)[0]);
      last = rand;
    }
  }
  result.push(temp.splice(0, 1)[0]);

  return result;
}

function SCIF(data: DayData[], settings: Settings) {
  let temp = [...data];
  const tabledata = {
    monday: SCIF2(temp, settings, "monday"),
    // tuesday: SCIF2(temp, settings, "tuesday"),
    // wednesday: SCIF2(temp, settings, "wednesday"),
    // thursday: SCIF2(temp, settings, "thursday"),
    // friday: SCIF2(temp, settings, "friday"),
    // saturday: SCIF2(temp, settings, "saturday")
  };

  return tabledata;
}

function SCIF2(subs_data: DayData[], settings: Settings, day: Weekdays) {
  let period_count = 7,
    randval = 0,
    it = 0,
    temp: any = [[], []];
  const periods: {
    data: DayData[];
    class: string[];
    set: number[];
    decider_set: number[];
  } = {
    data: [],
    class: [],
    set: [0, 0],
    decider_set: [0, 0],
  };

  if (settings.class_profile.year == 2 || settings.class_profile.year == 3) {
    periods.set = [5, 2];
    periods.decider_set = [5, 2];
    if (settings.days[day].need_lab) {

    } else {
      while (period_count != 0) {
        // selector loop
        while (true) {
          randval = randgen(subs_data.length);
          if (
            !subs_data[randval].islab &&
            !periods.class.includes(subs_data[randval].data)
          ) {
            let flg = 0;
            table_data.forEach((data) => {
              if (data.table[day].length > 0) {
                // console.log(data.table[day].at(period_count - (period_count - it++)).staff_id);
                // if(data.table[day].at((period_count - (period_count - it++))).staff_id == subs_data[randval].staff_id || undefined){
                //   flg = 1;
                // }
              }
            });
            if (flg == 0) {
              periods.class.push(subs_data[randval].data);
              break;
            }
          }
        }
        if (periods.set[0] != 0) {
          temp[0].unshift(subs_data.splice(randval, 1)[0]);
          periods.set[0]--;
        } else {
          temp[1].unshift(subs_data.splice(randval, 1)[0]);
        }
        period_count--;
      }
    }
  }

  for (let i = 0; i < periods.decider_set[1]; i++) {
    for (let j = 0; j < periods.decider_set[0]; j++) {
      if (i == 1) periods.decider_set[0] = 2;

      if (temp[i][j].islab) {
        for (let k = 0; k < temp[i][j].count; k++) {
          periods.data.push(temp[i][j]);
        }
      } else {
        periods.data.push(temp[i][j]);
      }
    }
  }
  console.log(periods.data);
  return periods.data;
}

/* <==== Main Functions ====> */

let arr: DayData[] = [],
  count_checker = 0;

userdata.subs.forEach((ele) => {
  if (!ele.islab) {
    for (let i = 0; i < ele.count; i++) {
      arr.push(ele);
    }
  } else {
    arr.push(ele);
  }
  count_checker = count_checker + ele.count;
});

arr = generator(arr);

if (count_checker == 42) {
  let result = SCIF(arr, userdata.days_settings);
  console.log(result);
}
