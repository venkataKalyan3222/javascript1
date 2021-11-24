let data = [
    { id: 101, name: "Rahul Gangdhi", sal: 45000 },
    { id: 102, name: "Priyanka Vadra", sal: 55000 },
  ];
create_Employee((values,callback)=>{
    setTimeout(()=>{
        data.push(values)
        callback()
    },3000)
})
get_Employee(()=>{
    setTimeout(()=>{
        let rows="";
        data.forEach((emp)=>{
            rows=rows+ `<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.sal}</td><td>${emp.loc}</td></tr>`
        })
        document.getElementById("tdata").innerHTML=rows;
    },1000)
})
create_Employee({ name: "Priyanka Gandhi", sal: 85000, loc: "Noida" },get_Employee);