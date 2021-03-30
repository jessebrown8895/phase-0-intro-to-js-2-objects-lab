// Write your solution in this file!
  const employee = {
  name: "Jesse",
    streetAddress: "2001 Faro Dr Austin, TX 78741"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, { [key]: value })
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee 
}

function deleteFromEmployeeByKey(employee, key){
  const newObject = Object.assign({}, employee)
    delete newObject[key]
    return newObject
} 

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
    
}

