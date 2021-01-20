/* Your Code Here */
function createEmployeeRecord(ele){
    return {
        firstName: ele[0],
        familyName: ele[1],
        title: ele[2],
        payPerHour: ele[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    let date = dateStamp.split(" ")[0]
    let hour = dateStamp.split(" ")[1]
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return this
}
function createTimeOutEvent(dateStamp){
    let date = dateStamp.split(" ")[0]
    let hour = dateStamp.split(" ")[1]
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate(date){
    let workDate = date.split(" ")[0]
    let clockIn = this.timeInEvents.find(e => e.date === workDate)
    let clockOut = this.timeOutEvents.find(e => e.date === workDate)
    return (clockOut.hour - clockIn.hour) / 100
}   



function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date)
    return (this.payPerHour * hoursWorked)
}

function findEmployeeByFirstName(allEmployees, firstName){
    return allEmployees.find(e => e.firstName === firstName)
}

function calculatePayroll(employees){
    return employees.reduce(function(total, pay){
        return total += allWagesFor.call(pay)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}