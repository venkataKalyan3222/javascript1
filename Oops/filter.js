let cars = [
    { name: "Hyndai", Model: "Venue", price: 1000000 },
    { name: "Hyndai", Model: "Creta", price: 2000000 },
    { name: "Hyndai", Model: "I20", price: 800000 },
    { name: "VW", Model: "Polo", price: 1100000 },
    { name: "Skoda", Model: "Rapid", price: 1200000 },
    { name: "BMW", Model: "X1", price: 3500000 },
    { name: "RR", Model: "Equoqe", price: 6000000 },
  ];
  let c1=cars.filter((a)=>{
     return a.price>=1000000;    //let c1=cars.filter((a)=>a.price<=100000;
                                                               
}
  );
  console.log(c1);
  
// console.log(cars[4]);
