//call back example
let data = [
    { name: "Ravi", sal: 45000, loc: "Bangalore" },
    { name: "Raj Kumar", sal: 55000, loc: "Chennai" },
    { name: "Rahul", sal: 65000, loc: "New Delhi" },
  ];
  getEmploye=()=>{
    let rows = "";// rows is empty
    data.forEach((emp) => {// emp -->data[i]-->data[0]-->{ name: "Ravi", sal: 45000, loc: "Bangalore" }1st etr
      rows = rows + `<tr><td>${emp.name}</td><td>${emp.loc}</td><td>${emp.sal}</td></tr>`;
    });
    document.getElementById("tdata").innerHTML = rows;// send data to html
  }
  getEmploye();
//   createEmployee({name:"kalyan",sal:"25000",loc:"Hyderabad"},getEmployee);

//   add(10,20);
// var a=[1,2,3,4];
// a.push(5) */


 