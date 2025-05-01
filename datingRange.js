function datingRange(age) {
    let min = 0;
    let max = 0;

    if (age <= 14) {

        min = Math.floor(age - 0.10 * age)
        max = Math.floor(age + 0.10 * age)
    } else {

        min = Math.floor((age / 2) + 7)
        max = Math.floor(2 * (age - 7))
    }

    return (`${min}-${max}`)
}

console.log(datingRange(10))