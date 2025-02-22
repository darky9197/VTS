function randgen(range) {
  return Math.floor(Math.random() * range);
}

function generator(arr) {
  let temp = [...arr];
  let result = []
  while (temp.length > 0) {
      result.push(temp.splice(randgen(temp.length),1));
  }
  return result;
}

function SCIF(arr, arrl) {
  let subs_visited = [];
  let labs_visited = [];
  let monday, tuesday, wednesday, thursday, friday, saturday;

  monday = SCIF2(arr, arrl, subs_visited, labs_visited);
  tuesday = SCIF2(arr, arrl, subs_visited, labs_visited);
  wednesday = SCIF2(arr, arrl, subs_visited, labs_visited);
  thursday = SCIF2(arr, arrl, subs_visited, labs_visited);
  friday = SCIF2(arr, arrl, subs_visited, labs_visited);
  saturday = SCIF2(arr, arrl, subs_visited, labs_visited);

  monday = generator(monday);
  tuesday = generator(tuesday);
  wednesday = generator(wednesday);
  thursday = generator(thursday);
  friday = generator(friday);
  saturday = generator(saturday);

  console.log(monday, tuesday, wednesday, thursday, friday, saturday);
}

function SCIF2(arr, arrl, subs_visited, labs_visited) {
  let repeater = [];
  let result = [];
  let lab,
    randlab,
    subslength = 0;
  let br1 = 0;
  let br2 = 0;

  // lab selector

  if (labs_visited.length >= arrl.length) {
    randlab = undefined;
  } else {
    while (true) {
      randlab = randgen(arrl);
      lab = arrl[randlab].data;
      if (!labs_visited.includes(randlab)) {
        labs_visited.push(randlab);
        br2++;
      }
      if (br2 == 1) {
        break;
      }
    }
  }

  if (randlab == undefined) {
    subslength = 7;
  } else {
    subslength = 7 - arrl[randlab].count;
  }

  while (true) {
    let randsub = randgen(arr);
    if (!subs_visited.includes(randsub)) {
      subs_visited.push(randsub);
      result.push(arr[randsub]);
      br1++;
      // if (!repeater.includes(arr[randsub])) {
      //   repeater.push(arr[randsub]);

      // }
    }

    if (br1 == subslength) {
      result.push(lab);
      break;
    }
  }

  return result.filter(ele => ele != undefined);
}

/* <==== Main Functions ====> */

let data = [
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
];


let arr = [], count_checker = 0;

data.forEach((ele) => {
  if (!ele.islab) {
    for (let i = 0; i < ele.count; i++) {
      arr.push(ele);
    }
  } else {
    arr.push(ele);
  }
});

console.log(arr);

arr = generator(arr);

console.log(arr);


// const btn = document.getElementById("exe_btn").addEventListener("click", () => {
//   document.querySelectorAll("#sub").forEach((element) => {
//     element.remove();
//     console.clear();
//   });

//   datas.forEach((e) => {
//     count_checker = count_checker + e.count
//   })
//   datal.forEach((e) => {
//     count_checker = count_checker + e.count
//   })


//   if (count_checker == 42) {
//     arr = generator(arr);
//     SCIF(arr, datal);
//     count_checker = 0;
//   }
//   else if (count_checker < 42) {
//     alert("Number of periods doesn't reach 42")
//     count_checker = 0;
//   }
//   else {
//     alert("Number of periods exceeds 42")
//     count_checker = 0;
//   }

// });