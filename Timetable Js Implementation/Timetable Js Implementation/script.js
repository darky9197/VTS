function randgen(range) {
  return Math.floor(Math.random() * range.length);
}

function generator(arr) {
  let visited = [];
  let result = [];
  let br = 0;

  while (true) {
    let randval = randgen(arr);
    if (!visited.includes(randval)) {
      visited.push(randval);
      result.push(arr[randval]);
      br++;
    }
    if (br == arr.length) {
      break;
    }
  }

  return result;
}

function SCIF(arr, arrl) {
  let subs_visited = [];
  let labs_visited = [];
  let monday,tuesday,wednesday,thursday,friday,saturday;

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


  setTimeout(() => {
    monday.forEach((element) => {
      const ele = document.createElement("td");
      ele.textContent = element;
      ele.setAttribute("id", "sub");
      for (let i = 0; i < datal.length; i++) {
        if (ele.textContent == datal[i].data) {
          ele.setAttribute("colspan", datal[i].count);
          ele.style.fontWeight = 700;
        }
      }
      document.querySelector(".sub_data_mon").appendChild(ele);
    });

    tuesday.forEach((element) => {
      const ele = document.createElement("td");
      ele.textContent = element;
      ele.setAttribute("id", "sub");
      for (let i = 0; i < datal.length; i++) {
        if (ele.textContent == datal[i].data) {
          ele.setAttribute("colspan", datal[i].count);
          ele.style.fontWeight = 700;
        }
      }
      document.querySelector(".sub_data_tues").appendChild(ele);
    });

    wednesday.forEach((element) => {
      const ele = document.createElement("td");
      ele.textContent = element;
      ele.setAttribute("id", "sub");
      for (let i = 0; i < datal.length; i++) {
        if (ele.textContent == datal[i].data) {
          ele.setAttribute("colspan", datal[i].count);
          ele.style.fontWeight = 700;
        }
      }
      document.querySelector(".sub_data_wed").appendChild(ele);
    });

    thursday.forEach((element) => {
      const ele = document.createElement("td");
      ele.textContent = element;
      ele.setAttribute("id", "sub");
      for (let i = 0; i < datal.length; i++) {
        if (ele.textContent == datal[i].data) {
          ele.setAttribute("colspan", datal[i].count);
          ele.style.fontWeight = 700;
        }
      }
      document.querySelector(".sub_data_thurs").appendChild(ele);
    });

    friday.forEach((element) => {
      const ele = document.createElement("td");
      ele.textContent = element;
      ele.setAttribute("id", "sub");
      for (let i = 0; i < datal.length; i++) {
        if (ele.textContent == datal[i].data) {
          ele.setAttribute("colspan", datal[i].count);
          ele.style.fontWeight = 700;
        }
      }
      document.querySelector(".sub_data_fri").appendChild(ele);
    });

    saturday.forEach((element) => {
      const ele = document.createElement("td");
      ele.textContent = element;
      ele.setAttribute("id", "sub");
      for (let i = 0; i < datal.length; i++) {
        if (ele.textContent == datal[i].data) {
          ele.setAttribute("colspan", datal[i].count);
          ele.style.fontWeight = 700;
        }
      }
      document.querySelector(".sub_data_sat").appendChild(ele);
    });
    console.log(monday, tuesday, wednesday, thursday, friday, saturday);
  }, 500);
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
  let result_r = result.filter((ele) => {
    return ele != undefined;
  });

  return [...result_r];
}

// <==== Main Functions ====>

let datas = [
  { data: "DM", count: 6 },
  { data: "DPCO", count: 4 },
  { data: "FDS", count: 7 },
  { data: "DSA", count: 5 },
  { data: "OOPS", count: 6 },
  { data: "placement", count: 1 },
  { data: "Library", count: 1 },
];

let datal = [
  { data: "DSA LAB", count: 3 },
  { data: "OOPS LAB", count: 3 },
  { data: "DPCO LAB", count: 2 },
  // { data: "DS LAB", count: 3 },
  { data: "PD LAB", count: 2 },
  { data: "Activity", count: 2 },
];

let arr = [],
  count_checker = 0;

datas.forEach((ele) => {
  for (let i = 0; i < ele.count; i++) {
    arr.push(ele.data);
  }
});

const btn = document.getElementById("exe_btn").addEventListener("click", () => {
  document.querySelectorAll("#sub").forEach((element) => {
    element.remove();
    console.clear();
  });

  datas.forEach((e) => {
    count_checker = count_checker + e.count
  })
  datal.forEach((e) => {
    count_checker = count_checker + e.count
  })


  if (count_checker == 42) {
    arr = generator(arr);
    SCIF(arr, datal);
    count_checker = 0;
  }
  else if (count_checker < 42) {
    alert("Number of periods doesn't reach 42")
    count_checker = 0;
  }
  else {
    alert("Number of periods exceeds 42")
    count_checker = 0;
  }

});

const containerid = document.getElementById('containerid').addEventListener('keypress',(event)=>{
  if(event.key === "Enter"){
    event.preventDefault(); 
    console.log("Enter is pressed");
    btn.click();
  }
})