let a=[{name:"kalyan"},{name:"vijay"},{name:"kalyan"}]
let b=[...new Map(a.map((c)=>[c["name"],c])).values(),]
console.log(b);
