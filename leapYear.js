let year = 2000
if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 == 0))
    console.log("It's Leap Year")
else
    console.log("It's not a Leap Year")

