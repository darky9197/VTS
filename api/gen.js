let tabledata = require('./local_database/tabledata.json')

function randgen(range) {
  return Math.floor(Math.random() * range);
}

function generator(arr) {
  let temp = [...arr], result = [], last = 0;
  while (temp.length > 1) {
    let rand = randgen(temp.length)
    if (rand != last) {
      result.push(temp.splice(rand, 1)[0]);
      last = rand;
    }
  }
  result.push(temp.splice(0, 1)[0]);

  return result;
}

function SCIF(data, settings) {
  let temp = [...data];
  const tabledata = {
    monday: SCIF2(temp, settings, "monday"),
    tuesday: SCIF2(temp, settings, "tuesday"),
    // wednesday: SCIF2(temp, settings, "wednesday"),
    // thursday: SCIF2(temp, settings, "thursday"),
    // friday: SCIF2(temp, settings, "friday"),
    // saturday: SCIF2(temp, settings, "saturday")
  }

  return tabledata;
}

function SCIF2(subs_data, settings, day) {
  let period_count = 7, randval = 0, temp = [[], []];
  const periods = {
    data: [],
    class: [],
    set: [0, 0],
    decider_set: [0, 0]
  }

  if (settings.class_profile.year == 2 || settings.class_profile.year == 3) {
    periods.set = [5, 2];
    periods.decider_set = [5, 2];
    if (settings[day].need_lab) {

    } else {
      while (period_count != 0) {
        // selection loop
        while (true) {
          randval = randgen(subs_data.length);
          if (!subs_data[randval].islab && !(periods.class.includes(subs_data[randval].data))) {
            periods.class.push(subs_data[randval].data);
            break;
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
  // console.log(temp[0][0]);
  for (let i = 0; i < periods.decider_set[1]; i++) {
    for (let j = 0; j < periods.decider_set[0]; j++) {
      if (i == 1) periods.decider_set[0] = 2;
      periods.data.push(temp[i][j]);
    }
  }
  // console.log(periods.data);
  return periods.data;

}

/* <==== Main Functions ====> */

let data = {
  subs: [
    {
      data: "DM", staff_id: 100,
      islab: false, count: 6
    },
    {
      data: "DPCO", staff_id: 101,
      islab: false, count: 4
    },
    {
      data: "FDS", staff_id: 102,
      islab: false, count: 7
    },
    {
      data: "DSA", staff_id: 103,
      islab: false, count: 5
    },
    {
      data: "OOPS", staff_id: 104,
      islab: false, count: 6
    },
    {
      data: "placement", staff_id: 103,
      islab: false, count: 1
    },
    {
      data: "Library", staff_id: 104,
      islab: false, count: 1
    },
    {
      data: "DSA LAB", staff_id: 103,
      islab: true, count: 3
    },
    {
      data: "OOPS LAB", staff_id: 104,
      islab: true, count: 3
    },
    {
      data: "DPCO LAB", staff_id: 101,
      islab: true, count: 2
    },
    // { data: "DS LAB", count: 3 },
    {
      data: "PD LAB", staff_id: 102,
      islab: true, count: 2
    },
    {
      data: "Activity", staff_id: 104,
      islab: true, count: 2
    },
  ],
  days_settings: {
    class_profile: { year: 2, section: 'A' },
    monday: { data: [], need_lab: false, in_afternoon: true },
    tuesday: { data: [], need_lab: true, in_afternoon: true },
    wednesday: { data: [], need_lab: true, in_afternoon: true },
    thursday: { data: [], need_lab: true, in_afternoon: true },
    friday: { data: [], need_lab: true, in_afternoon: true },
    saturday: { data: [], need_lab: true, in_afternoon: true }
  }
}


let arr = [], count_checker = 0;

data.subs.forEach((ele) => {
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
  let tabledata = SCIF(arr, data.days_settings);
  console.log(tabledata);
}

