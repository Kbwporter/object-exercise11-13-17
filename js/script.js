var cars = {
  brand: "Mercedes",
  model: "C 300",
  wheels: 4,
  on: true,
  color:['sliver','black','white','dark blue'],
interior: {
  leather: true,
  color: "camel",
  seats: 4,
},
drive: function( speed,time ){
  console.log(speed + " " + "miles per" + " " + time);
}
};

cars.drive('120','hour');
