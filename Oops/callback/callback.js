//call back example
let data = [
  { name: "Ravi", sal: 45000, loc: "Bangalore" },
  { name: "Raj Kumar", sal: 55000, loc: "Chennai" },
  { name: "Rahul", sal: 65000, loc: "New Delhi" },
    // { name: "Priyanka Gandhi", sal: 85000, loc: "Noida" } --is pushed by createEmployee function
  ];
/*   let createEmployee = (employee, callback) => {
    setTimeout(() => { 
      data.push(employee);//{ name: "Priyanka Gandhi", sal: 85000, loc: "Noida" } data is pushed in data array
      callback();//getEmployee()=== callback();
    }; */
    }, 5000);
  let getEmployee = () => {
    setTimeout(() => {

      let rows = "";// rows is empty
      data.forEach((emp) => {// emp -->data[i]-->data[0]-->{ name: "Ravi", sal: 45000, loc: "Bangalore" }1st etr
        rows = rows + `<tr><td>${emp.name}</td><td>${emp.loc}</td><td>${emp.sal}</td></tr>`;
      });
      document.getElementById("tdata").innerHTML = rows;// send data to html
    }, 1000);
  };
  getEmployee();
//   createEmployee({ name: "Priyanka Gandhi", sal: 85000, loc: "Noida" },getEmployee);
  