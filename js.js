function getSumOfNumbers(number, type = "odd") { 
    let total = 0
    
    if (typeof number !== "number" || type !== "odd" && type !== "even" && type !== "") {
             total = NaN

         }  else {
    for (let i = 0; i <= number; i += 1) { 
       
        if (type === "odd" && i % 2) {                // нечётные
             total += i 
        } else if (type === "even" && i % 2  === 0) {  // чётные
            total += i 
        } else if (type === "") {                      // все
            total += i
             }      
    }
    }
  
    return console.log(total);;
}

getSumOfNumbers (10, "even");