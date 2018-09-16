// Code your solution here:

// returns an array of driver objects that have a revenue attribute that's greater
//than the passed-in revenue argument.
function driversWithRevenueOver(driver, new_revenue) {
  return driver.filter(function (driver) {
      return driver.revenue > new_revenue
  });
}

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let match;

     for (const key in matcher) {
      match = driver[key] === matcher[key];
    }
     return match;
  });
}

function exactMatchToList(drivers, matcher) {
    return exactMatch(drivers, matcher).map(function (driver) {
        return driver.name
    });
}
