const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplyValue) {
    return function(value) {
        return multiplyValue * value
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

// let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
// const selectDifferentDrivers = function(drivers, driversToReturn) {
//     return driversToReturn [0, 1]
// }

function  selectDifferentDrivers(arrayOfDrivers, driversToReturn) {
    return driversToReturn (arrayOfDrivers)
}