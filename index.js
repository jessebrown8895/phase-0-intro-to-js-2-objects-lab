const employee = {
  name: "Sam",
  streetAddress: "2001 Faro DR unit 6 Austin TX 78741"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  return {
    ...employee, [key]: value
  }
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value 
    return employee
}

const deleteFromEmployeeByKey = (employee, key) => {
  let nondestructivelyDeleteKey = {...employee}
  delete nondestructivelyDeleteKey[key]
  return nondestructivelyDeleteKey
}

const destructivelyDeleteFromEmployeeByKey = (employee, key ) => {
  delete employee[key]
  return employee
  
}































// // Write your solution in this file!
//   const employee = {
//   name: "Jesse",
//     streetAddress: "2001 Faro Dr Austin, TX 78741"
// }
// function updateEmployeeWithKeyAndValue(employee, key, value){
//     return Object.assign({}, employee, { [key]: value })
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee[key] = value
//     return employee 
// }

// function deleteFromEmployeeByKey(employee, key){
//   const newObject = Object.assign({}, employee)
//     delete newObject[key]
//     return newObject
// } 

// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key]
//     return employee
    
// }

