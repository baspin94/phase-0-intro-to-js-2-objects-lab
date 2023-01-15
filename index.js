// Write your solution in this file!
const employee = {
    name: "Jim Halpert",
    streetAddress: "4000 Scranton Avenue",
};

function updateEmployeeWithKeyAndValue(empObject, key, value) {
    const modifiedEmployee = {...empObject};
    modifiedEmployee[key] = value;
    return modifiedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(empObject, key, value) {
    empObject[key] = value;
    return empObject;
};

function deleteFromEmployeeByKey(empObject, key) {
    const modifiedEmployee = {...empObject};
    delete modifiedEmployee[key];
    return modifiedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(empObject, key) {
    delete empObject[key];
    return empObject;
};