let number = 78
let temp = number
let factorial = 1

while (temp)
{
    if (temp === 0 || temp === 1)
        break
    else{
        factorial = factorial * temp
        temp--
    }
}

console.log(`The factorial of ${number} is ${factorial}`)