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
    tuesday: SCIF2(),
    wednesday: SCIF2(),
    thursday: SCIF2(),
    friday: SCIF2(),
    saturday: SCIF2()
  }


}

function SCIF2(data) {
  

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


let arr = [];

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

console.log(arr, count_checker);

if (count_checker == 42) {
  SCIF(data);
}