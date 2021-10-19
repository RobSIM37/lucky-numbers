function luckyNumbers(returnArrayLength, minNumber, maxNumber){

    let pool = [];

    for (buildNum=minNumber; buildNum<=maxNumber; buildNum++) {
        pool.push(buildNum);
    }

    let results = [];

    while (results.length < returnArrayLength && pool.length >= 1) { //Loop while we have returned fewer results than requested and the pool is not empty

        let pullIndex = Math.floor(Math.random()*pool.length); // create a random number between 0 (inclusive) and the pool length (exclusive)
        results.push(pool.splice(pullIndex,1)[0]); // splice out the selected element, convert it from an array to a number ([0]), and push it to the results

    }

    return results;

}

function generateBINGO(){

    const lowestBingoBall = 1;
    const totalBingoBalls = 75;
    const bingoLetterGroupSize = 15;
    const letters = ['B', 'I', 'N', 'G', 'O'];

    let rawNumbers = luckyNumbers(totalBingoBalls, lowestBingoBall, totalBingoBalls);

    for (i=0; i<rawNumbers.length; i++){

        let letterIndex = Math.ceil(rawNumbers[i]/bingoLetterGroupSize)-1; // divides the raw number into one of 5 groups by rounding up (1-5), then subtracts 1 for index
        rawNumbers[i] = `${letters[letterIndex]}${rawNumbers[i]}` // affixes the letter to the front of the number based on the index calculated above;

    }

    return rawNumbers; // now modified with the letter prefix

}

function rollXdYplusZ(rolls, sides, bonus){

    let result = 0;

    for (roll=1; roll <= rolls; roll++){

        result += luckyNumbers(1,1,sides)[0];

    }

    return result + bonus;

}

function maxOf(num1, num2){

    if (num1 >= num2){
        return num1;
    } else {
        return num2;
    }

}

function generateDnDStats(minStatValue){

    let statName = ['Str', 'Dex', 'Con', 'Int', 'Wis', 'Cha'];
    let result = [];

    for (i=0; i<statName.length; i++){

        result.push(`${statName[i]}: ${maxOf(rollXdYplusZ(3,6,0), minStatValue)}`) // pushes the concatination of the stat name and the result of the roll or 
                                                                                   // the minimum stat value, whichever is larger
    }

    return result;

}

let numbers = luckyNumbers(6, 1 ,10);
console.log(numbers);

let bingoBalls = generateBINGO();
console.log(bingoBalls);

let characterStats = generateDnDStats(8);
console.log(characterStats);
