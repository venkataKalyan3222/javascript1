let employee_Data = [
    { id: 101, name: "Rahul Gangdhi", sal: 45000 },
    { id: 102, name: "Priyanka Vadra", sal: 55000 },
  ];
  let create_Employee=(new_emp)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            employee_Data.push(new_emp);
            let flag=true;
            flag?resolve():reject("getting an error");
        },3000)
      })
      }  
  let get_Employee=(()=>{
      setTimeout(()=>{
          rows="";
          employee_Data.forEach((x)=>{
            rows+=`<tr>
            <td>${x.id}<td>
            <td>${x.name}<td>
            <td>${x.sal}<td>
                <tr>`;
          });
          document.getElementById("tbody").innerHTML=rows;
    },1000);
  });
  let ok=async()=>{
      await create_Employee({id: 103, name: "Sonia", sal: 66666},get_Employee());
  } 
  ok();
  