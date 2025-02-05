let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());
console.log(typeof myDate);

let myCreatedDate = new Date(2025, 01, 05)
console.log(myCreatedDate.toString());
let myCreatedDate2 = new Date("2025-02-05")
console.log(myCreatedDate2.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());

newDate.toLocaleString('default',{
    weekday:"long"
})