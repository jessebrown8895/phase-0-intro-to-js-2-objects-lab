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































