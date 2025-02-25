function randgen(range) {
  return Math.floor(Math.random() * range);
}

function generator(arr) {
  let temp = [...arr];
  
  let result = []
  while (temp.length > 0) {
    result.push(temp.splice(randgen(temp.length), 1)[0]);
  }
  return result;
}

function SCIF(data) {
  let temp = [...data];
  const tabledata = {
    monday: SCIF2(temp),
    tuesday: SCIF2(temp),
    wednesday: SCIF2(temp),
    thursday: SCIF2(temp),
    friday: SCIF2(temp),
    saturday: SCIF2(temp)
  }

  console.log(tabledata.monday.length,tabledata.tuesday.length,tabledata.wednesday.length,tabledata.thursday.length,tabledata.friday.length,tabledata.saturday.length);

}

function SCIF2(data) {
  let count = 0;
  let result = [];
  while(count != 8){
    let randval = randgen(data.length);
    if(data[randval].islab === true){
      count += data[randval].count;
    }else{
      count ++;
    }
    result.push(data.splice(randval, 1)[0]);
  }

  return result;

}

/* <==== Main Functions ====> */

let data = [
  {
    data: "DM", staff_id: 100, in_afternoon: false,
    islab: false, count: 6
  },
  {
    data: "DPCO", staff_id: 101, in_afternoon: false,
    islab: false, count: 4
  },
  {
    data: "FDS", staff_id: 102, in_afternoon: false,
    islab: false, count: 7
  },
  {
    data: "DSA", staff_id: 103, in_afternoon: false,
    islab: false, count: 5
  },
  {
    data: "OOPS", staff_id: 104, in_afternoon: false,
    islab: false, count: 6
  },
  {
    data: "placement", staff_id: 103, in_afternoon: false,
    islab: false, count: 1
  },
  {
    data: "Library", staff_id: 104, in_afternoon: false,
    islab: false, count: 1
  },
  {
    data: "DSA LAB", staff_id: 103, in_afternoon: true,
    islab: true, count: 3
  },
  {
    data: "OOPS LAB", staff_id: 104, in_afternoon: true,
    islab: true, count: 3
  },
  {
    data: "DPCO LAB", staff_id: 101, in_afternoon: false,
    islab: true, count: 2
  },
  // { data: "DS LAB", count: 3 },
  {
    data: "PD LAB", staff_id: 102, in_afternoon: true,
    islab: true, count: 2
  },
  {
    data: "Activity", staff_id: 104, in_afternoon: true,
    islab: true, count: 2
  },
];


let arr = [],count_checker=0;

data.forEach((ele) => {
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

console.log(count_checker);

if (count_checker == 42) {
  SCIF(arr);
}

