const accountId = 1234
let accountEmail = "sunnyd@gmail.com"
var accounntPass = "345"
accountCity = "ahmedabad"

//accountId = 789, not correct as cant reassign const variable
accountCity = "una"

console.log(accountId)
/*
var datatype shouldnt be used as for issues with block scope and functional scope
*/
console.table([accountId, accountEmail, accounntPass, accountCity])